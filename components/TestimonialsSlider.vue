<template>
  <div class="testimonial-slider">
    <vueper-slides
      ref="mainSlider"
      class="main-slider"
      fade
      :autoplay="true"
      :duration="8000"
      :infinite="true"
      :bullets="false"
      :arrows="false"
      :fixed-height="true"
      @slide="$refs.thumbSlider.goToSlide($event.currentSlide.index, { emit: false })">

      <vueper-slide
        v-for="(testimonial, i) in testimonials"
        :key="i"
        :content='`
          <div class="testimonial-content">
            <img src="/clients/client${i + 1}.jpg" alt="Author photo" class="author-photo" />
            <p class="testimonial-text font-inter-regular">${testimonial.text}</p>
            <p class="testimonial-author">
              <strong class="font-inter-regular">${testimonial.author}</strong>
              <br />
              <em class="font-inter-italic">${testimonial.author_}</em>
            </p>
          </div>
        `'
      />
    </vueper-slides>

    <vueper-slides
      ref="thumbSlider"
      class="thumbnails"
      :visible-slides="5"
      fixed-height="3rem"
      :bullets="false"
      :bullets-outside="false"
      :touchable="false"
      :gap="1"
      :arrows="false"
      @slide="$refs.mainSlider.goToSlide($event.currentSlide.index, { emit: false })"
    >

      <vueper-slide
        v-for="_, i in testimonials"
        :key="i"
        :image="`/clients/client${i + 1}.jpg`"
        @click="$refs.mainSlider.goToSlide(i)"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const { locale, messages } = useI18n()
const testimonials = computed(() => messages.value[locale.value]?.testimonials?.list || [])
</script>

<!-- .vueperslides--fixed-height { height: 500px; } -->

<style lang="scss">
.testimonial-slider {
  position: relative;
  padding-inline: 10%;
  width: 90% !important;
}

.testimonial-slider,
.main-slider {
  margin: 0 auto;
}

.main-slider {
  width: 100%;
  aspect-ratio: 1.2;

  @media (orientation: landscape) {
    aspect-ratio: 1.66;
  }


  & .vueperslides__parallax-wrapper,
  & .vueperslides__track
  {
    overflow: visible;
  }

  .vueperslides__inner {
    height: 100%;
  }
}

.testimonial-content {
  text-align: center;
  padding: 1rem;
  overflow: visible;

  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "text text"
    "photo author"
    "photo ."
  ;

  @media (orientation: portrait) {
    aspect-ratio: 1.5;
    gap: 0.5rem
  }
}

.author-photo {
  grid-area: photo;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.75rem;
  filter: brightness(1.1) contrast(1.1);
}

.testimonial-text {
  max-width: 80%;
  text-align: justify;
  grid-area: text;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  align-self: center;
  position: relative;
  overflow: visible;

  &::before,
  &::after {
    font-size: 150%;
    line-height: 100%;
    color: var(--accent);
    padding-inline: 0.1em;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-family: 'Kanit', sans-serif;
    font-family: 'Galada', cursive;
  }

  &::before {
    content: '“';
    position: absolute;
    left: calc(-0.25em - 1ch);
    z-index: 5;
  }
  &::after {
    content: '”';
  }
}

.testimonial-author {
  text-align: left;
  grid-area: author;
  font-size: 1rem;
}

.thumbnails {
  overflow: visible;
  border: 1px solid blue;
  width: 18rem;
  position: absolute;
  bottom: 0;
  right: 11.25%;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid var(--white);
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
  height: 100%;
  aspect-ratio: 1;
  overflow: visible;
}

.thumbnails .vueperslide--active {
  filter: drop-shadow(0 0 0.5em var(--accent50));
  opacity: 1;
  border-color: var(--accent);
}

.thumb-image {
  width: 2rem;
  height: 2rem;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  filter: saturate(0.8);
}
</style>
