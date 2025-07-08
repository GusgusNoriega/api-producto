<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class PingController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/ping",
     *     summary="Ping de prueba",
     *     @OA\Response(response=200, description="pong")
     * )
     */
    public function __invoke(): JsonResponse
    {
        return response()->json(['message' => 'pong']);
    }
}
