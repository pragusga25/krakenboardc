export interface HookConfig {
  webhookUrl: string
  username: string
  avatarUrl: string
}

export interface Config {
  [key: string]: HookConfig
}
