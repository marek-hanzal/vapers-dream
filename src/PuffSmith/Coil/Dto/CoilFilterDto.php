<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class CoilFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $userId;
	/**
	 * @var array|null|void
	 */
	public ?array $wireIds;
	/**
	 * @var array|null|void
	 */
	public ?array $wraps;
	/**
	 * @var array|null|void
	 */
	public ?array $ohm;
}
