<template>
  <div class="mx-auto">
      <div class="container row mx-auto ">
          <div class="totalscore mx-auto">
              {{buffer}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TotalScore',
  props: ['buffer']
}
</script>

<style>
  .roleDice {
    box-shadow: 5px 3px 2px 0px rgb(219, 221, 223);
    border: 2.9px double rgba(243, 241, 241, 0.712);
    border-radius: 20px;
    padding: 1rem 1rem 1rem 1rem;
    backface-visibility: hidden;
    background-color: rgba(5, 12, 10, 0.57);
    width: 15rem;
    height: 70px;
    margin: 0 auto;
    transition: all 0.3s;
    cursor: pointer;
  }
  h3 {
    cursor: pointer;
    text-transform: capitalize;
    transition: all 0.3s;
  }
  h3:hover {
    color: rgb(120, 165, 177);
  }
</style>
