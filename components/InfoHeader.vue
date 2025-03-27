

<template>
    <div class="sectioncontainer">
      <div class="section">
        <div class="info-header">
          <div class="text">
            <p>New: Featured Pieces</p>
            <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
      
          </div>
      
        </div>
  
      </div>
    </div>
  </template>
  

<script script setup>

</script>

<style lang="scss" scoped>
    @use "@/assets/sass/variables" as *; // Import variables

.sectioncontainer {
    background-color: $bg-white;
  width: 100%;


  .section {

  }
}



@media (max-width: 800px) {
  .sectioncontainer {
    .section {
      width: 100vw;
      .info-header {
//   background-color: $bg-secondary;
  height: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    
    p {
      color: $text-muted;
      font-size: 16px;
      font-weight: 300;

    }
    svg {
      fill: $text-muted;
      rotate: 180deg;

    }
  }

}

      
    }
  }
}
@media (max-width: 1200px) and (min-width: 800px) {
  .sectioncontainer {
    .section {

    }
  }
}
</style>