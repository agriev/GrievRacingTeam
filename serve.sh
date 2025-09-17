#!/bin/bash

# Скрипт для запуска Jekyll сервера локально
# Использование: ./serve.sh

echo "🏁 Запуск Jekyll сервера для Anton Griev Racing Team..."

# Активируем rbenv
export PATH="$HOME/.rbenv/bin:/opt/homebrew/bin:$PATH"
eval "$(rbenv init -)"

# Проверяем версию Ruby
echo "📋 Используем Ruby версии: $(ruby --version)"

# Проверяем установлен ли bundler
if ! command -v bundle &> /dev/null; then
    echo "❌ Bundler не найден. Устанавливаю..."
    gem install bundler
fi

# Устанавливаем зависимости если нужно
if [ ! -f "Gemfile.lock" ]; then
    echo "📦 Устанавливаю зависимости..."
    bundle install --path vendor/bundle
fi

# Запускаем сервер
echo "🚀 Запускаю сервер на http://localhost:4000"
echo "   Для остановки нажмите Ctrl+C"
echo ""

bundle exec jekyll serve --watch --livereload --host 0.0.0.0 --port 4000
