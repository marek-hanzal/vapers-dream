<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $modId;
	/**
	 * @var string
	 */
	public string $buildId;
	/**
	 * @var string
	 */
	public string $mixtureId;
	/**
	 * @var string|null
	 */
	public ?string $driptipId;
	/**
	 * @var int|null
	 */
	public ?int $rating;
	/**
	 * @var int|null
	 */
	public ?int $taste;
	/**
	 * @var int|null
	 */
	public ?int $throathit = 0;
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
	 * @var int|null
	 */
	public ?int $clouds;
	/**
	 * @var int|null
	 */
	public ?int $mtl;
	/**
	 * @var int|null
	 */
	public ?int $dl;
	/**
	 * @var int|null
	 */
	public ?int $dryhit = 0;
	/**
	 * @var int|null
	 */
	public ?int $leaks = 0;
	/**
	 * @var int|null
	 */
	public ?int $airflow = 10;
	/**
	 * @var int|null
	 */
	public ?int $juice = 10;
	/**
	 * @var float|null
	 */
	public ?float $power;
	/**
	 * @var int|null
	 */
	public ?int $tc;
}
