import { join } from "path"

export const config = {
  src: join('src', 'images', 'icon.png'),
  dest: join('www', 'favicons'),
  partial: join('src', 'views', 'includes', 'favicons.pug')
}