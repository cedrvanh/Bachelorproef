<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItemStoreRequest;
use App\Item;
use App\Traits\FtpImageable;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ItemController extends Controller
{
    use FtpImageable;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Item::paginate(10);

        return view('characters.items.index', compact('items'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('characters.items.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ItemStoreRequest $request)
    {
        $validated = $request->except('visible');

        $item = new Item($validated);

        if ($request->has('barcode')) {
            $file = $request->file('barcode');
            $name = Str::slug($request->name) . '.' . $file->getClientOriginalExtension();

            // Store image with slugified name
            $this->uploadImage($file, 'images/items', $name);

            $item->barcode = $name;
        }

        $item->visible = $request->has('visible') ? 1 : 0;
        $item->save();

        return redirect('items')->with('message', 'Item has been created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show(Item $item)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $item)
    {
        return view('characters.items.edit', compact('item'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Item $item)
    {
        $item->update($request->all());

        if ($request->has('thumbnail')) {
            $file = $request->file('thumbnail');
            $name = Str::slug($request->name) . '.' . $file->getClientOriginalExtension();

            // Store image with slugified name
            $this->uploadImage($file, 'images/items', $name);

            $item->update([
                'thumbnail' => $name
            ]);
        }

        $item->visible = $request->has('visible') ? 1 : 0;
        $item->save();

        return redirect('items')->with('message', 'Item has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        $item->delete();

        return redirect('items')->with('message', 'Item has been deleted');
    }
}
