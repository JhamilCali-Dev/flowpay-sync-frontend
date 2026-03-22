# 📋 Instrucciones para Windows

## 🚀 Pasos para Ejecutar FlowPay Sync en Windows

### 1. **Clonar el Repositorio**
```powershell
# Abre PowerShell o CMD
cd Downloads
git clone https://github.com/JhamilCali-Dev/flowpay-sync-frontend.git
cd flowpay-sync-frontend
```

### 2. **Instalar Dependencias**
```powershell
npm install
```

### 3. **Ejecutar en Modo Desarrollo**
```powershell
npm run dev
```

### 4. **Abrir en el Navegador**
La aplicación se abrirá automáticamente en:
**http://localhost:5173**

## 🔧 Solución de Problemas Comunes

### ❌ Error: "Could not read package.json"
**Solución:**
```powershell
# Asegúrate de estar en el directorio correcto
cd flowpay-sync-frontend
dir package.json  # Debería mostrar el archivo
```

### ❌ Error: "Vite config parse error"
**Solución:**
```powershell
# Limpia la caché de npm
npm cache clean --force

# Reinstala dependencias
rm -r node_modules  # En PowerShell: Remove-Item -Recurse -Force node_modules
npm install
```

### ❌ Error: "Port 5173 already in use"
**Solución:**
```powershell
# Mata el proceso en el puerto 5173
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F
```

## 📁 Estructura del Proyecto en Windows
```
C:\Users\ASUS_TUF\Downloads\flowpay-sync-frontend\
├── node_modules\          # Dependencias (se crea con npm install)
├── src\
│   ├── App.tsx           # Componente principal
│   ├── App.css           # Estilos del dashboard
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── public\               # Assets estáticos
├── package.json          # Dependencias y scripts
├── vite.config.ts        # Configuración de Vite
├── tsconfig.json         # Configuración TypeScript
└── README.md             # Documentación
```

## 🎯 Comandos Disponibles

```powershell
# Desarrollo
npm run dev              # Inicia servidor de desarrollo
npm run build            # Construye para producción
npm run preview          # Vista previa de producción
npm run lint             # Verifica código

# Limpieza
npm cache clean --force  # Limpia caché de npm
```

## 🌐 URLs Importantes
- **Aplicación local:** http://localhost:5173
- **Repositorio:** https://github.com/JhamilCali-Dev/flowpay-sync-frontend
- **Documentación Vite:** https://vite.dev/guide/

## 🚀 Características del Proyecto
✅ Dashboard en tiempo real con métricas cada 3s  
✅ Creación de payment links con WhatsApp  
✅ Integración visual Clover POS + Fiserv  
✅ Tabla de transacciones con filtros  
✅ Diseño dark mode profesional  
✅ Animaciones con Framer Motion  
✅ Iconos Lucide React  

## 📞 Soporte Técnico

Si encuentras problemas:

1. **Verifica Node.js y npm:**
   ```powershell
   node --version  # Debe ser 18+ 
   npm --version   # Debe ser 9+
   ```

2. **Actualiza npm:**
   ```powershell
   npm install -g npm@latest
   ```

3. **Reclona el proyecto:**
   ```powershell
   cd Downloads
   rm -r flowpay-sync-frontend  # Remove-Item -Recurse -Force flowpay-sync-frontend
   git clone https://github.com/JhamilCali-Dev/flowpay-sync-frontend.git
   cd flowpay-sync-frontend
   npm install
   npm run dev
   ```

---

**🎉 ¡FlowPay Sync está listo para ejecutarse en Windows!**