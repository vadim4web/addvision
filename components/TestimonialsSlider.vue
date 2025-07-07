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
      fixed-height="15rem"
      @slide="$refs.thumbSlider.goToSlide($event.currentSlide.index, { emit: false })">

      <vueper-slide
        v-for="(testimonial, i) in localizedTestimonials"
        :key="i"
        :content='`<div><img src="${clientImages[i]}" alt="Author photo" class="author-photo" /><p class="testimonial-text">${testimonial.text}</p><p class="testimonial-author">${testimonial.author}</p></div>`'
      />
    </vueper-slides>

    <vueper-slides
      ref="thumbSlider"
      class="thumbnails"
      :visible-slides="localizedTestimonials.length"
      fixed-height="75px"
      :bullets="false"
      :touchable="false"
      :gap="2.5"
      :arrows="false"
      @slide="$refs.mainSlider.goToSlide($event.currentSlide.index, { emit: false })"
    >

      <vueper-slide
        v-for="(clientImage, i) in clientImages"
        :key="i"
        :image="clientImage"
        @click="$refs.mainSlider.goToSlide(i)"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const props = defineProps({ locale: { type: String, default: 'en' } })

const clientImages = [
  '/clients/client1.jpg',
  '/clients/client2.jpg',
  '/clients/client3.jpg',
  '/clients/client4.jpg',
  '/clients/client5.jpg',
  '/clients/client6.jpg',
  '/clients/client7.jpg',
  '/clients/client8.jpg',
  '/clients/client9.jpg',
  '/clients/client10.jpg',
  '/clients/client11.jpg',
  '/clients/client12.jpg',
]

const testimonials = {
  en: [
    {
      text: 'Add Vision helped us completely redefine our digital presence. Their design and development skills are top-notch!',
      author: 'John Smith, CEO of InnovateX'
    },
    {
      text: 'The branding strategy from Add Vision elevated our business identity to a new level. Highly recommended!',
      author: 'Lisa Chen, Brand Director at MarketSquare'
    },
    {
      text: 'From website to Telegram mini-app, Add Vision handled everything with creativity and precision.',
      author: 'Oleh Dmytruk, Co-founder of Localify'
    },
    {
      text: 'Their SEO and content marketing boosted our online visibility significantly. True digital partners!',
      author: 'Anna Volkova, CMO at Greenstep'
    }
  ],
  uk: [
    {
      text: 'Add Vision допомогли повністю змінити наш цифровий імідж. Їхній дизайн та розробка — на найвищому рівні!',
      author: 'Іван Смолін, CEO InnovateX'
    },
    {
      text: 'Брендинг від Add Vision вивів нашу ідентичність на новий рівень. Щиро рекомендую!',
      author: 'Ліса Чен, бренд-директорка MarketSquare'
    },
    {
      text: 'Від сайту до Telegram-додатку — Add Vision все зробили креативно й точно.',
      author: 'Олег Дмитрук, співзасновник Localify'
    },
    {
      text: 'Їхній SEO та контент-маркетинг значно підвищили нашу видимість. Справжні digital-партнери!',
      author: 'Анна Волкова, CMO Greenstep'
    }
  ],
  ru: [
    {
      text: 'Add Vision полностью преобразили наш цифровой образ. Их дизайн и разработка — на высоте!',
      author: 'Иван Смолин, CEO InnovateX'
    },
    {
      text: 'Брендинг от Add Vision поднял нашу айдентику на новый уровень. Рекомендую!',
      author: 'Лиза Чен, бренд-директор MarketSquare'
    },
    {
      text: 'От сайта до мини-приложения Telegram — Add Vision справились на отлично.',
      author: 'Олег Дмитрук, сооснователь Localify'
    },
    {
      text: 'Их SEO и контент-маркетинг значительно увеличили нашу видимость. Отличные партнёры!',
      author: 'Анна Волкова, CMO Greenstep'
    }
  ]
}

const localizedTestimonials = computed(() => testimonials[props.locale] || testimonials.en)
</script>

<style>
.vueperslides--fixed-height { height: 500px; }
.testimonial-slider {
  width: 100%;
}
</style>

/* <style>
.testimonial-slider {
  max-width: 700px;
  margin: 0 auto;
}
.main-slider {
  margin-bottom: 1rem;
}
.testimonial-content {
  text-align: center;
  padding: 1rem;
}
.author-photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.75rem;
}
.testimonial-text {
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 0.5rem;
}
.testimonial-author {
  font-weight: bold;
  font-size: 0.9rem;
}
.thumbnails {
  max-width: 300px;
  margin: auto;
}
.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}
.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
}
.thumb-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
*/