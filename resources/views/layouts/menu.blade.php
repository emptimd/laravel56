
<li class="{{ Request::is('admin/categories*') ? 'active' : '' }}">
    <a href="{!! route('admin.categories.index') !!}"><i class="fa fa-edit"></i><span>Categories</span></a>
</li>

<li class="{{ Request::is('admin/products*') ? 'active' : '' }}">
    <a href="{!! route('admin.products.index') !!}"><i class="fa fa-edit"></i><span>Products</span></a>
</li>

<li class="{{ Request::is('admin/stores*') ? 'active' : '' }}">
    <a href="{!! route('admin.stores.index') !!}"><i class="fa fa-edit"></i><span>Stores</span></a>
</li>

<li class="{{ Request::is('admin/storeCategories*') ? 'active' : '' }}">
    <a href="{!! route('admin.storeCategories.index') !!}"><i class="fa fa-edit"></i><span>Store Categories</span></a>
</li>


<li class="{{ Request::is('admin/contacts*') ? 'active' : '' }}">
    <a href="{!! route('admin.contacts.index') !!}"><i class="fa fa-edit"></i><span>Contacts</span></a>
</li>

