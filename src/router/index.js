import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TermsView from '../views/TermsView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import HelpView from '../views/HelpView.vue'
import ContactView from '../views/ContactView.vue'
import { setPageMeta } from '../utils/seo'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Safed — продукты с доставкой на дом',
        description:
          'Мобильное приложение Safed для заказа продуктов с доставкой. Свежие товары, удобное оформление и отслеживание заказа.',
      },
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsView,
      meta: {
        title: 'Условия использования — Safed',
        description:
          'Условия использования мобильного приложения Safed и сервиса доставки продуктов.',
      },
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView,
      meta: {
        title: 'Политика конфиденциальности — Safed',
        description:
          'Как Safed собирает, использует и защищает ваши персональные данные.',
      },
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView,
      meta: {
        title: 'Помощь — Safed',
        description:
          'Частые вопросы о заказах, доставке, оплате и поддержке в приложении Safed.',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Контакты — Safed',
        description:
          'Служба поддержки Safed: телефон, email и Telegram для связи.',
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.meta.title && to.meta.description) {
    setPageMeta({ title: to.meta.title, description: to.meta.description })
  }
})

export default router
