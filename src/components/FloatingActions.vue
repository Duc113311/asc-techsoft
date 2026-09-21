<script setup>
import { ref, nextTick, computed } from 'vue'
import { useSiteContent } from '../shared/site-content'
import { useI18n } from '../i18n'

const siteData = useSiteContent()
const { currentLocale, locale } = useI18n()

const AI_BASE = import.meta.env.VITE_AI_GATEWAY_URL ?? 'https://server-gateway.asctechsoft.com'
const AI_KEY  = import.meta.env.VITE_AI_GATEWAY_KEY ?? ''
const AI_MODEL = import.meta.env.VITE_AI_MODEL ?? 'gpt-4o-mini'

const systemPrompt = computed(() => {
  const lang = locale.value === 'vi' ? 'Vietnamese' : 'English'
  return `You are a helpful assistant for AscTechSoft, a Vietnamese technology company specializing in mobile apps, web platforms, and digital marketing services. Products include: AquaMind (water tracking), PicMind (AI photo editor), and custom software. Answer concisely and helpfully. Always reply in ${lang} unless the user writes in a different language. Keep responses under 120 words.`
})

const chatOpen = ref(false)
const chatMsg = ref('')
const messages = ref([])
const isTyping = ref(false)
const messagesEl = ref(null)
const inputEl = ref(null)

function openChat() {
  chatOpen.value = true
  if (messages.value.length === 0) {
    messages.value.push({ role: 'assistant', content: currentLocale.value?.ui?.chatGreeting ?? 'Xin chào! Chúng tôi có thể giúp gì cho bạn?' })
  }
  nextTick(() => inputEl.value?.focus())
}

async function sendMsg() {
  const text = chatMsg.value.trim()
  if (!text || isTyping.value) return
  chatMsg.value = ''
  inputEl.value?.focus()
  messages.value.push({ role: 'user', content: text })
  await scrollBottom()
  isTyping.value = true

  try {
    const res = await fetch(`${AI_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${AI_KEY}`,
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: [
          { role: 'system', content: systemPrompt.value },
          ...messages.value.map(m => ({ role: m.role, content: m.content })),
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
      signal: AbortSignal.timeout(30000),
    })

    if (!res.ok) {
      const errText = await res.text().catch(() => '')
      console.error('[Chat] API error', res.status, errText)
      throw new Error(`HTTP ${res.status}`)
    }
    const data = await res.json()
    const reply = data.choices?.[0]?.message?.content?.trim() ?? '...'
    messages.value.push({ role: 'assistant', content: reply })
  } catch (err) {
    console.error('[Chat] fetch error:', err)
    messages.value.push({ role: 'assistant', content: currentLocale.value?.ui?.chatError ?? 'Xin lỗi, không thể kết nối. Vui lòng thử lại sau.' })
  } finally {
    isTyping.value = false
    await scrollBottom()
    inputEl.value?.focus()
  }
}

async function scrollBottom() {
  await nextTick()
  if (messagesEl.value) messagesEl.value.scrollTop = messagesEl.value.scrollHeight
}

function onKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg() }
}

const zaloPhone = computed(() => siteData.value?.footer?.contact?.phone ?? '0384367193')
const zaloUrl = computed(() => `https://zalo.me/${zaloPhone.value.replace(/\s/g, '')}`)
</script>

<template>
  <div class="floating-actions">
    <!-- Zalo -->
    <a class="fab fab-zalo" :href="zaloUrl" target="_blank" rel="noopener" aria-label="Chat Zalo">
      <svg viewBox="0 0 48 48" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="10" fill="white" fill-opacity="0.2"/>
        <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle"
          font-family="Arial Black,sans-serif" font-weight="900" font-size="26" fill="white">Z</text>
      </svg>
      <span class="fab-label">Zalo</span>
    </a>

    <!-- Chat -->
    <button class="fab fab-chat" type="button" aria-label="Chat AI" @click="openChat">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M12 2C6.48 2 2 6.03 2 11c0 2.67 1.19 5.07 3.07 6.79L4 22l4.36-1.46A10.1 10.1 0 0 0 12 21c5.52 0 10-4.03 10-9S17.52 2 12 2z" fill="white"/>
        <circle cx="8.5" cy="11" r="1.2" fill="#2563eb"/>
        <circle cx="12" cy="11" r="1.2" fill="#2563eb"/>
        <circle cx="15.5" cy="11" r="1.2" fill="#2563eb"/>
      </svg>
      <span class="fab-label">Chat AI</span>
    </button>

    <!-- Chat popup -->
    <Transition name="chat-slide">
      <div v-if="chatOpen" class="chat-popup">
        <div class="chat-header">
          <div class="chat-avatar">A</div>
          <div class="chat-header-info">
            <strong>AscTechSoft AI</strong>
            <span class="chat-status">● Online</span>
          </div>
          <button class="chat-close" type="button" @click="chatOpen = false">✕</button>
        </div>

        <div ref="messagesEl" class="chat-messages">
          <div v-for="(msg, i) in messages" :key="i" class="chat-msg" :class="msg.role === 'user' ? 'chat-msg-user' : 'chat-msg-bot'">
            <span class="chat-bubble">{{ msg.content }}</span>
          </div>
          <div v-if="isTyping" class="chat-msg chat-msg-bot">
            <span class="chat-bubble chat-typing">
              <span></span><span></span><span></span>
            </span>
          </div>
        </div>

        <div class="chat-input-row">
          <input
            ref="inputEl"
            v-model="chatMsg"
            class="chat-input"
            :placeholder="currentLocale?.ui?.chatPlaceholder ?? 'Nhập tin nhắn...'"
            :disabled="isTyping"
            @keydown="onKeydown"
          />
          <button class="chat-send" type="button" :disabled="isTyping" @click="sendMsg">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>
