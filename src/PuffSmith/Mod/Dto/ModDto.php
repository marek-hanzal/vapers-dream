<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Vendor\Dto\VendorDto;

class ModDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var int|null
	 */
	public ?int $power;
	/**
	 * @var string
	 */
	public string $vendorId;
	/**
	 * @var VendorDto
	 */
	public VendorDto $vendor;
}
