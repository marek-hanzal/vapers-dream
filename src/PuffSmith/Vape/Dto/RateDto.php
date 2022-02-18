<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto;

use Edde\Dto\AbstractDto;

class RateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var int|null
	 */
	public ?int $rating;
	/**
	 * @var int|null
	 */
	public ?int $throathit;
	/**
	 * @var int|null
	 */
	public ?int $fruits;
	/**
	 * @var int|null
	 */
	public ?int $tobacco;
	/**
	 * @var int|null
	 */
	public ?int $cakes;
	/**
	 * @var int|null
	 */
	public ?int $complex;
	/**
	 * @var int|null
	 */
	public ?int $fresh;
	/**
	 * @var float|null
	 */
	public ?float $power;
	/**
	 * @var int|null
	 */
	public ?int $tc;
}
