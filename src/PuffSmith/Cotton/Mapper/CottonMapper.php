<?php
declare(strict_types=1);

namespace PuffSmith\Cotton\Mapper;

use ClanCats\Hydrahon\Query\Sql\Exception;
use Edde\Mapper\AbstractMapper;
use Edde\Mapper\Exception\ItemException;
use Edde\Mapper\Exception\SkipException;
use Edde\Repository\Exception\RepositoryException;
use PuffSmith\Cotton\Dto\CottonDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class CottonMapper extends AbstractMapper {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	/**
	 * @param $item
	 *
	 * @return CottonDto
	 *
	 * @throws Exception
	 * @throws ItemException
	 * @throws SkipException
	 * @throws RepositoryException
	 */
	public function item($item) {
		return $this->dtoService->fromArray(CottonDto::class, [
			'id'          => $item->id,
			'name'        => $item->name,
			'description' => $item->description,
			'vendorId'    => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'      => $this->vendorMapper->item($vendor),
		]);
	}
}
