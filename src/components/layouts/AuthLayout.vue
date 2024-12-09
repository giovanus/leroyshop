<template>
  <div class="md:px-0 md:py-0 px-8 py-2 relative h-screen">
    <div class="logo absolute top-8 left-5">
      <img src="@/assets/images/logo.png" width="100px" alt="" />
    </div>
    <div class="main-content md:mt-0 mt-20 md:flex md:h-auto h-2/3">
      <div class="h-screen md:w-1/2 hidden md:block">
        <slot name="image-field"></slot>
      </div>
      <div
        class="md:w-[40%] md:mx-auto md:h-auto flex flex-col justify-center h-full md:flex md:flex-col md:justify-center"
      >
        <slot name="form-field"></slot>
      </div>
    </div>
  </div>
</template>
