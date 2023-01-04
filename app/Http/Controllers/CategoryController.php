<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\DB;

class CategoryController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        return CategoryResource::collection(Category::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreCategoryRequest $request
     * @return JsonResponse
     */
    public function store(StoreCategoryRequest $request)
    {
        DB::beginTransaction();
        try {
            $category = Category::create('title', $request->title);
            DB::commit();
            return $this->returnResponse("success", "Created successfully", new CategoryResource($category));
        } catch (QueryException $e) {
            DB::rollback();
            return $this->returnResponse("error", $e->getMessage(), '', 502);
        } catch (\Exception $e) {
            DB::rollback();
            return $this->returnResponse("error", $e->getMessage(), '', $e->getCode());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Category $category
     * @return CategoryResource
     */
    public function show(Category $category)
    {
        return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateCategoryRequest $request
     * @param Category $category
     * @return JsonResponse
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        DB::beginTransaction();
        try {
             $category->update(['title', $request->title]);
            DB::commit();
            return $this->returnResponse("success", "Updated successfully", new CategoryResource($category));
        } catch (QueryException $e) {
            DB::rollback();
            return $this->returnResponse("error", $e->getMessage(), '', 502);
        } catch (\Exception $e) {
            DB::rollback();
            return $this->returnResponse("error", $e->getMessage(), '', $e->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Category $category
     * @return JsonResponse
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return $this->returnResponse("success", "Deleted successfully");
    }
}
