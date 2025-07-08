<?php

namespace App\Docs;

use OpenApi\Annotations as OA;

/**
 * Todas las definiciones de esquema van en **un único** DocBlock
 * pegado a la clase, así Swagger-PHP las registra sin problemas.
 *
 * @OA\Schema(
 *     schema="Product",
 *     type="object",
 *     @OA\Property(property="id", type="integer", example=1),
 *     @OA\Property(property="name", type="string", example="Camisa"),
 *     @OA\Property(property="description", type="string", example="Camisa de algodón"),
 *     @OA\Property(property="image_path", type="string", nullable=true, example="products/xyz.jpg"),
 *     @OA\Property(property="created_at", type="string", format="date-time"),
 *     @OA\Property(property="updated_at", type="string", format="date-time")
 * )
 *
 * @OA\Schema(
 *     schema="ProductInput",
 *     required={"name"},
 *     allOf={
 *         @OA\Schema(ref="#/components/schemas/Product"),
 *         @OA\Schema(type="object", @OA\Property(property="id", readOnly=true))
 *     }
 * )
 *
 * @OA\Schema(
 *     schema="ProductCollection",
 *     type="object",
 *     @OA\Property(
 *         property="data",
 *         type="array",
 *         @OA\Items(ref="#/components/schemas/Product")
 *     ),
 *     @OA\Property(property="links", type="object"),
 *     @OA\Property(property="meta", type="object")
 * )
 *
 * @OA\Schema(
 *     schema="ProductMultipartInput",
 *     type="object",
 *     required={"name"},
 *     @OA\Property(property="name", type="string", example="Camisa"),
 *     @OA\Property(property="description", type="string", example="Camisa de algodón"),
 *     @OA\Property(
 *         property="image",
 *         type="string",
 *         format="binary",
 *         description="Imagen JPG o PNG (máx. 2 MB)"
 *     )
 * )
 */
class Schemas {}
