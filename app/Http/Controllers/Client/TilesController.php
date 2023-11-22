<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Page;
use App\Models\Slider;
use App\Models\Vacancy;
use App\Repositories\Eloquent\ResumeRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Database\Eloquent\Builder;
use Inertia\Inertia;
use App\Repositories\Eloquent\ProductRepository;
use App\Models\Product;



class TilesController extends Controller
{
    public function index($locale,$slug)
    {

        // dd(Category::with('products.file')->where('slug',$slug)->get());
        $page = Page::where('key', 'home')->firstOrFail();

        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }

        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);
        //        dd($page->file);
        //        dd(App::getLocale());
        // $products = app(ProductRepository::class)->getPopularProducts();



        //dd($products);

        return Inertia::render(
            'Tiles',
            [
                // "product" => Product::with('latestImage')->where('category_id', ('7'))->paginate(10),
                // "product" => Product::with(['latestImage', 'categories'])->paginate(10),
                'products' => Category::with('products.file')->where('slug',$slug)->first(),
                "sliders" => $sliders->get(),
                "page" => $page,
                "seo" => [
                    "title" => $page->meta_title,
                    "description" => $page->meta_description,
                    "keywords" => $page->meta_keyword,
                    "og_title" => $page->meta_og_title,
                    "og_description" => $page->meta_og_description,
                    //            "image" => "imgg",
                    //            "locale" => App::getLocale()
                ],
            ]
        )->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }


    public function tiles2()
    {


        $page = Page::where('key', 'home')->firstOrFail();

        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }

        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);
        //        dd($page->file);
        //        dd(App::getLocale());
        // $products = app(ProductRepository::class)->getPopularProducts();



        //dd($products);

        return Inertia::render(
            'Tiles2',
            [
                "product" => Product::with('latestImage')->paginate(10),
                "sliders" => $sliders->get(),
                "page" => $page,
                "seo" => [
                    "title" => $page->meta_title,
                    "description" => $page->meta_description,
                    "keywords" => $page->meta_keyword,
                    "og_title" => $page->meta_og_title,
                    "og_description" => $page->meta_og_description,
                    //            "image" => "imgg",
                    //            "locale" => App::getLocale()
                ],
            ]
        )->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }

    public function doors()
    {
        $page = Page::where('key', 'home')->firstOrFail();

        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }

        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);
        //        dd($page->file);
        //        dd(App::getLocale());
        // $products = app(ProductRepository::class)->getPopularProducts();



        //dd($products);

        return Inertia::render(
            'Doors',
            [
                // "staff" => Staff::all(),
                "sliders" => $sliders->get(),
                "page" => $page,
                "seo" => [
                    "title" => $page->meta_title,
                    "description" => $page->meta_description,
                    "keywords" => $page->meta_keyword,
                    "og_title" => $page->meta_og_title,
                    "og_description" => $page->meta_og_description,
                    //            "image" => "imgg",
                    //            "locale" => App::getLocale()
                ],
            ]
        )->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }

    public function bathroom()
    {


        $page = Page::where('key', 'home')->firstOrFail();

        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }

        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);
        //        dd($page->file);
        //        dd(App::getLocale());
        // $products = app(ProductRepository::class)->getPopularProducts();



        //dd($products);

        return Inertia::render(
            'Bathroom',
            [
                // "staff" => Staff::all(),
                "sliders" => $sliders->get(),
                "page" => $page,
                "seo" => [
                    "title" => $page->meta_title,
                    "description" => $page->meta_description,
                    "keywords" => $page->meta_keyword,
                    "og_title" => $page->meta_og_title,
                    "og_description" => $page->meta_og_description,
                    //            "image" => "imgg",
                    //            "locale" => App::getLocale()
                ],
            ]
        )->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }

    public function singleproduct()
    {


        $page = Page::where('key', 'home')->firstOrFail();

        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }

        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);
        //        dd($page->file);
        //        dd(App::getLocale());
        // $products = app(ProductRepository::class)->getPopularProducts();



        //dd($products);

        return Inertia::render(
            'SingleProduct',
            [
                // "staff" => Staff::all(),
                "sliders" => $sliders->get(),
                "page" => $page,
                "seo" => [
                    "title" => $page->meta_title,
                    "description" => $page->meta_description,
                    "keywords" => $page->meta_keyword,
                    "og_title" => $page->meta_og_title,
                    "og_description" => $page->meta_og_description,
                    //            "image" => "imgg",
                    //            "locale" => App::getLocale()
                ],
            ]
        )->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }


    public function show(string $locale, $slug)
    {
        $page = Page::where('key', 'home')->firstOrFail();

        return Inertia::render('SingleProduct', [
            "product" => Product::with('latestImage')->find($slug),
            "seo" => [
                "title" => $page->meta_title ?? $page->meta_title,
                "description" => $page->meta_description ?? $page->meta_description,
                "keywords" => $page->meta_keyword ?? $page->meta_keyword,
                "og_title" => $page->meta_og_title,
                "og_description" => $page->meta_og_description,
            ]
        ])->withViewData([
            'meta_title' => $page->meta_title ?? $page->meta_title,
            'meta_description' => $page->meta_description ?? $page->meta_description,
            'meta_keyword' => $page->meta_keyword ?? $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }
}
