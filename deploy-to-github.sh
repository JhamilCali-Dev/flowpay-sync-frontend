#!/bin/bash

# Script para subir FlowPay Sync a GitHub
# Ejecutar: bash deploy-to-github.sh

echo "🚀 Preparando para subir FlowPay Sync a GitHub..."

# Verificar si git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git no está instalado. Por favor instala git primero."
    exit 1
fi

# Verificar si estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ No estás en el directorio de FlowPay Sync."
    echo "   Navega a: cd flowpay-frontend"
    exit 1
fi

echo "📦 Creando repositorio en GitHub..."
echo ""
echo "📋 PASOS MANUALES:"
echo "=================="
echo ""
echo "1. Ve a https://github.com/new"
echo "2. Crea un nuevo repositorio llamado: flowpay-sync-frontend"
echo "3. NO inicialices con README, .gitignore o license"
echo "4. Elige si quieres público o privado"
echo "5. Haz clic en 'Create repository'"
echo ""
echo "📋 COMANDOS PARA EJECUTAR DESPUÉS DE CREAR EL REPO:"
echo "=================================================="
echo ""
echo "Copiar y pegar estos comandos uno por uno:"
echo ""
echo "# 1. Agregar el remote de GitHub"
echo "git remote add origin https://github.com/JhamilCali-Dev/flowpay-sync-frontend.git"
echo ""
echo "# 2. Subir el código a GitHub"
echo "git push -u origin main"
echo ""
echo "🎉 ¡Listo! Tu proyecto estará en:"
echo "https://github.com/JhamilCali-Dev/flowpay-sync-frontend"
echo ""
echo "💻 Para ejecutar el proyecto localmente:"
echo "npm install"
echo "npm run dev"
echo ""
echo "🌐 La app se abrirá en: http://localhost:5173"

# Crear .gitignore si no existe
if [ ! -f ".gitignore" ]; then
    echo "📝 Creando .gitignore..."
    cat > .gitignore << EOF
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
build/
dist/

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
Thumbs.db
EOF
    git add .gitignore
    git commit -m "Add .gitignore"
fi

echo ""
echo "✅ Proyecto listo para subir a GitHub!"
echo "   Sigue los pasos arriba para completar la subida."