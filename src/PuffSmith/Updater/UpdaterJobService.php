<?php
declare(strict_types=1);

namespace PuffSmith\Updater;

use Edde\Job\AbstractJobService;
use Edde\Job\IJob;
use Edde\Query\Dto\Query;
use PuffSmith\Coil\CoilServiceTrait;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;

class UpdaterJobService extends AbstractJobService {
	use CoilServiceTrait;
	use CoilRepositoryTrait;

	protected function handle(IJob $job) {
		$coils = $this->coilRepository->total(new Query());

		$progress = $job->getProgress();
		$progress->onStart($coils);
		foreach ($this->coilRepository->all() as $coil) {
			$progress->onProgress();

			$ohm = $this->coilService->toCoilOhm($coil->id);

			$this->coilRepository->change([
				'id'         => $coil->id,
				'ohm'        => $ohm,
				'nominalOhm' => $ohm ? $this->coilService->toNominalOhm($coil->wraps, $coil->size, $ohm) : null,
			]);
		}

		return [
			'coils' => $coils,
		];
	}
}
