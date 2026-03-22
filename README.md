# FlowPay Sync - Frontend

![FlowPay Sync Dashboard](https://img.shields.io/badge/FlowPay-Sync-6d28d9)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF)

**FlowPay 2.0: Ecosistema Omnicanal para LATAM** - Conectando el caos de WhatsApp con el orden de Clover (Fiserv)

## 🚀 Características Principales

### 💼 Dashboard en Tiempo Real
- **Métricas en vivo** con polling cada 3 segundos
- **Cards de estadísticas** (Revenue, Ventas, Links Activos, Clientes)
- **Gráficos interactivos** de ventas y distribución de revenue
- **Tabla de transacciones** con actualización automática
- **Activity feed** con eventos recientes

### 🔗 Creación de Payment Links
- **Generación inteligente** de links de pago
- **Upsell automático** basado en el producto
- **Compartir por WhatsApp** con mensaje predefinido
- **Copiar al portapapeles** con un clic
- **Integración con Fiserv** para pagos seguros

### 🔄 Integraciones
- **Clover POS** - Sincronización bidireccional
- **Fiserv** - Procesamiento de pagos
- **WhatsApp Business API** - Recepción automática de pedidos
- **Web3 con Avalanche** - Pagos con cripto (próximamente)

### 📊 Analytics Avanzados
- **Revenue por canal** (WhatsApp, Links Directos, Clover POS)
- **Tasa de conversión** en tiempo real
- **Valor promedio de orden** (AOV)
- **Conversiones por WhatsApp** con tracking

## 🛠️ Tecnologías

- **React 19** - Framework principal
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultra rápido
- **Framer Motion** - Animaciones fluidas
- **Recharts** - Visualización de datos
- **Lucide React** - Iconos modernos
- **CSS Modules** - Estilos modulares

## 🚀 Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/flowpay-frontend.git
cd flowpay-frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
flowpay-frontend/
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── pages/           # Páginas principales
│   ├── hooks/           # Custom hooks
│   ├── utils/           # Funciones utilitarias
│   ├── types/           # Definiciones TypeScript
│   ├── App.tsx          # Componente principal
│   ├── App.css          # Estilos globales
│   └── main.tsx         # Punto de entrada
├── public/              # Assets estáticos
├── package.json         # Dependencias
├── tsconfig.json        # Config TypeScript
├── vite.config.ts       # Config Vite
└── README.md            # Documentación
```

## 🔌 API Endpoints (Backend)

El frontend está diseñado para conectarse a los siguientes endpoints:

```typescript
// Métricas en tiempo real
GET /api/metrics

// Transacciones
GET /api/transactions
POST /api/transactions

// Creación de payment links
POST /api/create-link

// Sincronización con Clover
POST /api/sync-clover

// Webhooks de WhatsApp
POST /api/webhook/whatsapp
```

## 🎨 Diseño

- **Dark Mode** profesional con paleta de colores moderna
- **Responsive** para móvil, tablet y desktop
- **Animaciones** suaves con Framer Motion
- **Tipografía** Sora + JetBrains Mono
- **Gradientes** y efectos de glassmorphism

## 📈 Roadmap

### Fase 1 (Completado ✅)
- [x] Dashboard básico
- [x] Creación de payment links
- [x] Integración visual con Clover/Fiserv
- [x] Sistema de notificaciones

### Fase 2 (En desarrollo 🚧)
- [ ] Backend real con Node.js/Express
- [ ] Base de datos PostgreSQL
- [ ] Autenticación JWT
- [ ] Webhooks reales

### Fase 3 (Próximamente 🔮)
- [ ] Integración real con Clover API
- [ ] WhatsApp Business API
- [ ] Pagos con Avalanche (Web3)
- [ ] App móvil React Native

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 👥 Equipo

**FlowPay Sync** es parte del hackathon **FlowPay 2.0** - Conectando LATAM con pagos omnicanal.

---

**"From chat to checkout."** 💳✨