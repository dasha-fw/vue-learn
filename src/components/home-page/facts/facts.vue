<template>
  <div class="facts container">
    <h2 class="facts__title">Some facts and figures</h2>
    <div class="facts__circles">
      <div class="facts__circle">
        <div
          class="facts__progress-bar-orange"
          role="progressbar"
          aria-valuenow="98"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <p>Totally satisfied clients</p>
      </div>
      <div class="facts__circle">
        <div
          class="facts__progress-bar-orange-pink"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <p>Years of experience</p>
      </div>
      <div class="facts__circle">
        <div
          class="facts__progress-bar-blue"
          role="progressbar"
          aria-valuenow="85"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <p>Working hours spent</p>
      </div>
      <div class="facts__circle-green">
        <div
          class="facts__progress-bar-green"
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <p>Succeeded projects</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Facts'
}
</script>
<style lang="scss">
@import '../../../assets/vars';

.facts {
  padding: 180px 0;

  &__circle {
    position: relative;
  }

  &__circles {
    display: flex;
    grid-gap: 48px;
    justify-content: center;
  }

  &__circle-transparent {
    position: absolute;
  }

  &__text {
    color: $gray-900;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 25%;
  }

  &__title {
    color: $gray-900;
    font-size: 46px;
    font-weight: 700;
    line-height: 130%;
    text-align: center;
    margin: 0;
    padding-bottom: 60px;
  }

  &__progress-bar-orange {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 148px;
    height: 148px;
    border-radius: 50%;
    background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
      conic-gradient(#f89828 88%, rgba(248, 152, 40, 0.3) 0);

    &:before {
      content: '98%';
      font-size: 32px;
      font-weight: 700;
      line-height: 150%;
    }
  }

  &__progress-bar-orange-pink {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 148px;
    height: 148px;
    border-radius: 50%;
    background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
      conic-gradient(#f52f6e 75%, rgba(245, 47, 110, 0.3) 0);

    &:before {
      content: '20';
      font-size: 32px;
      font-weight: 700;
      line-height: 150%;
    }
  }

  &__progress-bar-blue {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 148px;
    height: 148px;
    border-radius: 50%;
    background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
      conic-gradient(#5a87fc 85%, rgba(90, 135, 252, 0.3) 0);

    &:before {
      content: '9452';
      font-size: 32px;
      font-weight: 700;
      line-height: 150%;
    }
  }

  &__progress-bar-green {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 148px;
    height: 148px;
    border-radius: 50%;
    background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
      conic-gradient(#03cea4 100%, rgba(0, 0, 0, 0) 0);

    &:before {
      content: '100%';
      font-size: 32px;
      font-weight: 700;
      line-height: 150%;
    }
  }
}
</style>
