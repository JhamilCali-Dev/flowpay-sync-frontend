import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, CreditCard, Link, Users, TrendingUp, Bell, Search, 
  ChevronRight, CheckCircle, Clock, XCircle, MessageSquare,
  RefreshCw, Download, Filter, Settings, HelpCircle,
  Package, DollarSign, User, Smartphone, Coffee, Pizza,
  ArrowUpRight, ArrowDownRight, MoreVertical
} from 'lucide-react'
import './App.css'

// Types
interface Transaction {
  id: string
  product: string
  method: string
  customer: string
  email: string
  amount: number
  status: 'completed' | 'pending' | 'failed'
  date: string
  clover: string
  _new?: boolean
}

interface Activity {
  icon: string
  bg: string
  title: string
  desc: string
  time: string
}

interface Metric {
  revenue: number
  sales: number
  links: number
  customers: number
}

function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalStep, setModalStep] = useState<'form' | 'generating' | 'success'>('form')
  const [product, setProduct] = useState('')
  const [amount, setAmount] = useState('')
  const [generatedLink, setGeneratedLink] = useState('')
  const [whatsappLink, setWhatsappLink] = useState('')
  const [upsell, setUpsell] = useState('')
  const [linkId, setLinkId] = useState('')
  const [copied, setCopied] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  
  // Initial data
  const [metrics, setMetrics] = useState<Metric>({
    revenue: 45231.89,
    sales: 2350,
    links: 48,
    customers: 573
  })
  
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id:'TXN-001', product:'Premium Subscription', method:'Visa •••• 4242', customer:'Sarah Johnson', email:'sarah@example.com', amount:99.00, status:'completed', date:'2024-03-20 14:32', clover:'CLV-8f3a' },
    { id:'TXN-002', product:'Basic Plan', method:'Mastercard •••• 5555', customer:'Mike Chen', email:'mike@example.com', amount:29.00, status:'completed', date:'2024-03-20 12:15', clover:'CLV-2b7c' },
    { id:'TXN-003', product:'Enterprise License', method:'Wire Transfer', customer:'Acme Corp', email:'billing@acme.com', amount:499.00, status:'pending', date:'2024-03-20 10:45', clover:'' },
    { id:'TXN-004', product:'Annual Subscription', method:'Visa •••• 1234', customer:'Jane Doe', email:'jane@example.com', amount:199.00, status:'failed', date:'2024-03-19 16:22', clover:'' },
    { id:'TXN-005', product:'Add-on Package', method:'Apple Pay', customer:'Tom Wilson', email:'tom@example.com', amount:49.00, status:'completed', date:'2024-03-19 09:10', clover:'CLV-9d1e' },
  ])
  
  const [activities, setActivities] = useState<Activity[]>([
    { icon:'✅', bg:'rgba(16,185,129,.12)', title:'Payment received', desc:'$99.00 from Sarah Johnson', time:'2 min ago' },
    { icon:'🔗', bg:'rgba(109,40,217,.12)', title:'New payment link created', desc:'Premium Subscription — $49.00', time:'15 min ago' },
    { icon:'👤', bg:'rgba(59,130,246,.12)', title:'New customer', desc:'Mike Chen signed up', time:'1 hour ago' },
    { icon:'🔄', bg:'rgba(76,175,80,.12)', title:'Clover POS synced', desc:'12 transactions imported', time:'2 hours ago' },
    { icon:'✅', bg:'rgba(16,185,129,.12)', title:'Payment received', desc:'$199.00 from Acme Corp', time:'3 hours ago' },
  ])

  // Polling for metrics every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate API call to /api/metrics
      setMetrics(prev => ({
        ...prev,
        revenue: prev.revenue + Math.random() * 10,
        sales: prev.sales + Math.floor(Math.random() * 2),
        links: prev.links + (Math.random() > 0.8 ? 1 : 0),
        customers: prev.customers + (Math.random() > 0.9 ? 1 : 0)
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Polling for transactions every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate API call to /api/transactions
      // In real implementation: fetch('/api/transactions').then(res => res.json()).then(data => setTransactions(data))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getUpsell = (product: string, amount: number) => {
    const p = product.toLowerCase()
    if(p.includes('pizza')||p.includes('lomo')||p.includes('comida')) return `🍹 Add a drink for just +$${(amount*.18).toFixed(2)} — 3× perceived value`
    if(p.includes('café')||p.includes('cafe')||p.includes('coffee')) return `🥐 Breakfast combo +$${(amount*.2).toFixed(2)} — 68% of customers choose it`
    if(p.includes('plan')||p.includes('subscription')||p.includes('premium')) return `💳 Annual plan saves 30% — $${(amount*10*.7).toFixed(0)}/year`
    if(amount > 100) return `💳 Installment payments available — increase conversions by 40%`
    return `⚡ Pay in seconds from any device — no app needed`
  }

  const generateLink = async () => {
    if (!product || !amount || parseFloat(amount) <= 0) {
      alert('Please fill in all fields')
      return
    }

    setModalStep('generating')
    
    // Simulate API call
    setTimeout(() => {
      const linkId = Math.random().toString(36).substring(2,10)
      const url = `https://pay.flowpay.io/${linkId}`
      const upsellText = getUpsell(product, parseFloat(amount))
      const waMsg = `Your payment for *${product}* ($${parseFloat(amount).toFixed(2)}) is ready 💳\n👉 Pay here: ${url}\n\n✨ ${upsellText}\n_Powered by FlowPay Sync + Fiserv_`
      
      setGeneratedLink(url)
      setWhatsappLink(`https://wa.me/?text=${encodeURIComponent(waMsg)}`)
      setUpsell(upsellText)
      setLinkId(linkId)
      
      // Update metrics
      setMetrics(prev => ({ ...prev, links: prev.links + 1 }))
      
      setModalStep('success')
    }, 1800)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const syncClover = () => {
    const newTx: Transaction = {
      id: `TXN-${String(transactions.length+1).padStart(3,'0')}`,
      product:'Clover POS Sale', 
      method:'Clover POS',
      customer:'Walk-in Customer', 
      email:'—',
      amount: Math.floor(Math.random()*80+10) + .99,
      status:'completed',
      date: new Date().toISOString().replace('T',' ').substring(0,16),
      clover:`CLV-${Math.random().toString(36).substring(2,6)}`,
      _new: true
    }
    
    setTransactions(prev => [newTx, ...prev])
    setMetrics(prev => ({ 
      revenue: prev.revenue + newTx.amount,
      sales: prev.sales + 1
    }))
    
    setActivities(prev => [{
      icon:'🔄',
      bg:'rgba(76,175,80,.12)',
      title:'Clover POS synced',
      desc:`$${newTx.amount.toFixed(2)} imported`,
      time:'just now'
    }, ...prev.slice(0, 5)])
    
    setTimeout(() => {
      setTransactions(prev => prev.map(tx => 
        tx._new ? { ...tx, _new: false } : tx
      ))
    }, 2500)
  }

  const filteredTransactions = transactions.filter(tx =>
    tx.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const pageConfig = {
    dashboard: { title: 'Dashboard', desc: "Welcome back! Here's what's happening with your business today." },
    create: { title: 'Create Payment Link', desc: 'Generate secure payment links for your products and services.' },
    history: { title: 'Transaction History', desc: 'View and manage all your past transactions.' },
    analytics: { title: 'Analytics', desc: 'Deep dive into your sales performance and trends.' },
    settings: { title: 'Settings', desc: 'Manage your account preferences and integrations.' },
    help: { title: 'Help & Support', desc: 'Get help with FlowPay Sync features and troubleshooting.' },
  }

  const currentPage = pageConfig[activePage as keyof typeof pageConfig] || pageConfig.dashboard

  return (
    <div className="app">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-text">
            <div className="logo-name">FlowPay <span>Sync</span></div>
            <div className="logo-tagline">From chat to checkout.</div>
          </div>
          <div className="online-dot"></div>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-section-label">Menu</div>
          <button 
            className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActivePage('dashboard')}
          >
            <div className="nav-icon" style={{ background: 'rgba(109,40,217,.15)' }}>
              <BarChart3 size={16} />
            </div>
            Dashboard
          </button>
          <button 
            className={`nav-item ${activePage === 'create' ? 'active' : ''}`}
            onClick={() => setActivePage('create')}
          >
            <div className="nav-icon" style={{ background: 'rgba(8,145,178,.12)' }}>
              <Link size={16} />
            </div>
            Create Link
            <span className="nav-badge">3</span>
          </button>
          <button 
            className={`nav-item ${activePage === 'history' ? 'active' : ''}`}
            onClick={() => setActivePage('history')}
          >
            <div className="nav-icon" style={{ background: 'rgba(5,150,105,.12)' }}>
              <CreditCard size={16} />
            </div>
            History
          </button>
          <button 
            className={`nav-item ${activePage === 'analytics' ? 'active' : ''}`}
            onClick={() => setActivePage('analytics')}
          >
            <div className="nav-icon" style={{ background: 'rgba(217,119,6,.12)' }}>
              <TrendingUp size={16} />
            </div>
            Analytics
          </button>
        </div>

        <div className="sidebar-section" style={{ marginTop: '8px' }}>
          <div className="sidebar-section-label">Integrations</div>
          <div style={{ padding: '8px 12px' }}>
            <div className="int-badge" style={{ background: 'rgba(76,175,80,.08)', borderColor: 'rgba(76,175,80,.25)', color: '#4caf50', marginBottom: '6px' }}>
              <div className="int-dot" style={{ background: '#4caf50' }}></div>
              Clover POS Connected
            </div>
            <div className="int-badge" style={{ background: 'rgba(194,24,91,.08)', borderColor: 'rgba(194,24,91,.25)', color: '#f06292' }}>
              <div className="int-dot" style={{ background: '#f06292' }}></div>
              Fiserv Active
            </div>
          </div>
        </div>

        <div className="sidebar-section" style={{ marginTop: 'auto' }}>
          <button 
            className={`nav-item ${activePage === 'settings' ? 'active' : ''}`}
            onClick={() => setActivePage('settings')}
          >
            <div className="nav-icon" style={{ background: 'rgba(255,255,255,.06)' }}>
              <Settings size={16} />
            </div>
            Settings
          </button>
          <button 
            className={`nav-item ${activePage === 'help' ? 'active' : ''}`}
            onClick={() => setActivePage('help')}
          >
            <div className="nav-icon" style={{ background: 'rgba(255,255,255,.06)' }}>
              <HelpCircle size={16} />
            </div>
            Help & Support
          </button>
        </div>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <h4>💳 Upgrade to Pro</h4>
            <p>Unlock unlimited payment links and advanced analytics</p>
            <button className="btn-upgrade">Upgrade Now</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main">
        <header className="header">
          <div className="header-left">
            <h1>{currentPage.title}</h1>
            <p>{currentPage.desc}</p>
          </div>
          <div className="header-right">
            <div className="search-box">
              <Search size={14} />
              <input 
                placeholder="Search…" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn-create" onClick={() => setModalOpen(true)}>
              <span>+</span> Create Payment Link
            </button>
            <div className="btn-icon">
              <Bell size={16} />
              <div className="notif-dot"></div>
            </div>
            <div className="avatar">JD</div>
          </div>
        </header>

        <div className="content">
          {/* Dashboard Page */}
          {activePage === 'dashboard' && (
            <div className="page active">
              {/* Quick Actions */}
              <div className="quick-actions">
                <div className="qa-card" onClick={() => setModalOpen(true)}>
                  <div className="qa-icon" style={{ background: 'rgba(109,40,217,.15)' }}>
                    <Link size={18} />
                  </div>
                  <div className="qa-text">
                    <h4>New Payment Link</h4>
                    <p>Create a new link</p>
                  </div>
                  <ChevronRight size={14} style={{ marginLeft: 'auto', color: 'var(--t3)' }} />
                </div>
                <div className="qa-card" onClick={syncClover}>
                  <div className="qa-icon" style={{ background: 'rgba(76,175,80,.12)' }}>
                    <RefreshCw size={18} />
                  </div>
                  <div className="qa-text">
                    <h4>Sync with Clover</h4>
                    <p>Import transactions</p>
                  </div>
                  <ChevronRight size={14} style={{ marginLeft: 'auto', color: 'var(--t3)' }} />
                </div>
                <div className="qa-card">
                  <div className="qa-icon" style={{ background: 'rgba(8,145,178,.12)' }}>
                    <Download size={18} />
                  </div>
                  <div className="qa-text">
                    <h4>Generate Report</h4>
                    <p>Export analytics</p>
                  </div>
                  <ChevronRight size={14} style={{ marginLeft: 'auto', color: 'var(--t3)' }} />
                </div>
                <div className="qa-card" onClick={() => setActivePage('settings')}>
                  <div className="qa-icon" style={{ background: 'rgba(217,119,6,.12)' }}>
                    <Settings size={18} />
                  </div>
                  <div className="qa-text">
                    <h4>Settings</h4>
                    <p>Configure account</p>
                  </div>
                  <ChevronRight size={14} style={{ marginLeft: 'auto', color: 'var(--t3)' }} />
                </div>
              </div>

              {/* Stats Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-top">
                    <span className="stat-label">Total Revenue</span>
                    <div className="stat-icon" style={{ background: 'rgba(16,185,129,.12)'