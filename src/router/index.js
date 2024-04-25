import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layouts */
const VerticleLayout = () => import('../layouts/VerticleLayout')
const Default = () => import('../layouts/BlankLayout')
const AuthLayout = () => import('../layouts/AuthLayouts/AuthLayout')
/* Dashboards View */

const Home = () => import('../views/Shop/home')
const Category = () => import('../views/Shop/category')
const Bookpage = () => import('../views/Shop/bookpage')
const Bookpdf = () => import('../views/Shop/bookpdf')
const Checkout = () => import('../views/Shop/checkout')
const Wishlist = () => import('../views/Shop/wishlist')
const Address = () => import('../views/Shop/address')
const Payment = () => import('../views/Shop/payment')

const Dashboard = () => import('../views/Admin/dashboard')
const Categorylist = () => import('../views/Admin/categorylist')
const Orderlist = () => import('../views/Admin/orderlist')

const Customerlist = () => import('../views/Admin/customerlist')
const EditCustomer = () => import('../views/Admin/editcustomer')
const Book = () => import('../views/Admin/books')
const Author = () => import('../views/Admin/author')
const AddCategory = () => import('../views/Admin/addcategory')
const EditCategory = () => import('../views/Admin/editcategory')
const AddBook = () => import('../views/Admin/addbook')
const EditBook = () => import('../views/Admin/editbook')
const AddAuthor = () => import('../views/Admin/addauthor')

/* Authentic View */
const SignIn = () => import('../views/AuthPages/Default/SignIn')
const SignUp = () => import('../views/AuthPages/Default/SignUp')
const RecoverPassword1 = () => import('../views/AuthPages/Default/RecoverPassword1')
const LockScreen1 = () => import('../views/AuthPages/Default/LockScreen1')
const ConfirmMail1 = () => import('../views/AuthPages/Default/ConfirmMail1')
/* Extra Pages */
const ErrorPage = () => import('../views/Pages/ErrorPage')
const ComingSoon = () => import('../views/Pages/ComingSoon')
const Maintenance = () => import('../views/Pages/Maintenance')
const TimeLine = () => import('../views/Pages/TimeLines')

const Pricing1 = () => import('../views/Pages/Pricing1')
const BlankPage = () => import('../views/Pages/BlankPage')
const FAQ = () => import('../views/Pages/FAQ')
const Invoice = () => import('../views/Pages/Invoice')

/* Icon Views */
const IconDripicons = () => import('../views/Icons/IconDripicons')
const IconFontawesome5 = () => import('../views/Icons/IconFontawesome5')
const IconLineAwesome = () => import('../views/Icons/IconLineAwesome')
const IconRemixicon = () => import('../views/Icons/IconRemixicon')
const IconUnicons = () => import('../views/Icons/IconUnicons')
/* Tables Views */
const TablesBasic = () => import('../views/Tables/TablesBasic')
const EditableTable = () => import('../views/Tables/EditableTable')

/* Form View */
const FormLayout = () => import('../views/Forms/FormLayout')
const FormValidates = () => import('../views/Forms/FormValidates')
const FormSwitches = () => import('../views/Forms/FormSwitches')
const FormRadios = () => import('../views/Forms/FormRadios')
const FormCheckboxes = () => import('../views/Forms/FormCheckboxes')
/* Apps View */

Vue.use(VueRouter)

const childRoutes = (prop) => [
  {
    path: '/home',
    name: prop + '.home',
    meta: { auth: true, name: 'Home Page' },
    component: Home
  },
  {
    path: 'category-page',
    name: prop + '.category',
    meta: { auth: true, name: 'Category Page' },
    component: Category
  },
  {
    path: 'book-page',
    name: prop + '.book',
    meta: { auth: true, name: 'Book Page' },
    component: Bookpage
  },
  {
    path: 'book-pdf',
    name: prop + '.bookPdf',
    meta: { auth: true, name: 'Book PDF' },
    component: Bookpdf
  },
  {
    path: 'checkout',
    name: prop + '.checkout',
    meta: { auth: true, name: 'Checkout' },
    component: Checkout
  },
  {
    path: 'wishlist',
    name: prop + '.wishlist',
    meta: { auth: true, name: 'Wishlist' },
    component: Wishlist
  },
  {
    path: 'checkout-address',
    name: 'address',
    component: Address,
    meta: { auth: true, name: 'Address' }
  },
  {
    path: '/checkout-payment',
    name: 'payment',
    component: Payment,
    meta: { auth: true, name: 'payment' }
  }
]
const adminchildRoutes = (prop) => [
  {
    path: 'dashboard',
    name: prop + '.dashboard',
    meta: { auth: true, name: 'Dashboard' },
    component: Dashboard
  },
  {
    path: 'category-list',
    name: prop + '.categorylist',
    meta: { auth: true, name: 'Category List' },
    component: Categorylist
  },
  {
    path: 'order-list',
    name: prop + '.orderlist',
    meta: { auth: true, name: 'Order List' },
    component: Orderlist
  },
  {
    path: 'customer-list',
    name: prop + '.customerlist',
    meta: { auth: true, name: 'Customer List' },
    component: Customerlist
  },
  {
    path: 'author',
    name: prop + '.author',
    meta: { auth: true, name: 'Author' },
    component: Author
  },
  {
    path: 'books',
    name: prop + '.book',
    meta: { auth: true, name: 'Books' },
    component: Book
  },
  {
    path: '/add-category',
    name: 'addcategory',
    component: AddCategory,
    meta: { auth: true, name: 'Addcategory' }
  },
  {
    path: '/edit-category',
    name: 'editcategory',
    component: EditCategory,
    meta: { auth: true, name: 'Editcategory' }
  },
  {
    path: '/edit-customer',
    name: 'editcustomer',
    component: EditCustomer,
    meta: { auth: true, name: 'Editcustomer' }
  },
  {
    path: '/add-book',
    name: 'addbook',
    component: AddBook,
    meta: { auth: true, name: 'Addbook' }
  },
  {
    path: '/edit-book/:id',
    name: 'editbook',
    component: EditBook,
    meta: { auth: true, name: 'EditBook' }
  },
  {
    path: '/add-author',
    name: 'addauthor',
    component: AddAuthor,
    meta: { auth: true, name: 'Addauthor' }
  }
]

const formChildRoute = (prop) => [
  {
    path: 'form-layout',
    name: prop + '.layout',
    meta: { auth: true, name: 'Layout' },
    component: FormLayout
  },
  {
    path: 'form-validate',
    name: prop + '.validate',
    meta: { auth: true, name: 'Validate' },
    component: FormValidates
  },
  {
    path: 'form-switches',
    name: prop + '.switch',
    meta: { auth: true, name: 'Switch' },
    component: FormSwitches
  },
  {
    path: 'form-radios',
    name: prop + '.radio',
    meta: { auth: true, name: 'Radio' },
    component: FormRadios
  },
  {
    path: 'form-checkboxes',
    name: prop + '.checkbox',
    meta: { auth: true, name: 'Checkbox' },
    component: FormCheckboxes
  }
]

const tableChildRoute = (prop) => [
  {
    path: 'tables-basic',
    name: prop + '.basic',
    meta: { auth: true, name: 'Basic' },
    component: TablesBasic
  },
  {
    path: 'editable',
    name: prop + '.editable',
    meta: { auth: true, name: 'Editable' },
    component: EditableTable
  }
]

const iconChildRoute = (prop) => [
  {
    path: 'dripicons',
    name: prop + '.dripicons',
    meta: { auth: true, name: 'Dripicons' },
    component: IconDripicons
  },
  {
    path: 'fontawesome-5',
    name: prop + '.fontawesome-5',
    meta: { auth: true, name: 'Font Awsome' },
    component: IconFontawesome5
  },
  {
    path: 'lineawesome',
    name: prop + '.lineawesome',
    meta: { auth: true, name: 'Line Awsome' },
    component: IconLineAwesome
  },
  {
    path: 'remixicon',
    name: prop + '.remixicon',
    meta: { auth: true, name: 'Remixicon' },
    component: IconRemixicon
  },
  {
    path: 'unicons',
    name: prop + '.unicons',
    meta: { auth: true, name: 'Unicon' },
    component: IconUnicons
  }
]

const authChildRoutes = (prop) => [
  {
    path: 'sign-in1',
    name: prop + '.sign-in1',
    meta: { auth: true },
    component: SignIn
  },
  {
    path: 'sign-up1',
    name: prop + '.sign-up1',
    meta: { auth: true },
    component: SignUp
  },
  {
    path: 'password-reset1',
    name: prop + '.password-reset1',
    meta: { auth: true },
    component: RecoverPassword1
  },
  {
    path: 'lock-screen1',
    name: prop + '.lock-screen1',
    meta: { auth: true },
    component: LockScreen1
  },
  {
    path: 'confirm-mail1',
    name: prop + '.confirm-mail1',
    meta: { auth: true },
    component: ConfirmMail1
  }
]

const defaultlayout = (prop) => [
  {
    path: 'timeline',
    name: prop + '.timeline',
    meta: { auth: true, name: 'Timeline' },
    component: TimeLine
  },
  {
    path: 'invoice',
    name: prop + '.invoice',
    meta: { auth: true, name: 'Invoice' },
    component: Invoice
  },
  {
    path: 'blank-page',
    name: prop + '.blank-page',
    meta: { auth: true, name: 'Blank Page' },
    component: BlankPage
  },
  {
    path: 'pricing',
    name: prop + '.pricing',
    meta: { auth: true, name: 'Pricing' },
    component: Pricing1
  },

  {
    path: 'faq',
    name: prop + '.faq',
    meta: { auth: true, name: 'Faq' },
    component: FAQ
  }
]

const pagesChildRoutes = (prop) => [
  {
    path: 'error/:code',
    name: prop + '.error',
    meta: { auth: true },
    component: ErrorPage
  },
  {
    path: 'coming-soon',
    name: prop + '.coming-soon',
    meta: { auth: true },
    component: ComingSoon
  },
  {
    path: 'maintenance',
    name: prop + '.maintenance',
    meta: { auth: true },
    component: Maintenance
  }
]
const routes = [
  {
    path: '/',
    component: VerticleLayout,
    meta: { auth: true },
    children: childRoutes('shop')
  },
  {
    path: '/admin',
    name: 'admin',
    component: VerticleLayout,
    meta: { auth: true },
    children: adminchildRoutes('admin')
  },
  {
    path: '/table',
    name: 'table',
    component: VerticleLayout,
    meta: { auth: true },
    children: tableChildRoute('table')
  },
  {
    path: '/icon',
    name: 'icon',
    component: VerticleLayout,
    meta: { auth: true },
    children: iconChildRoute('icon')
  },
  {
    path: '/auth',
    name: 'auth1',
    component: AuthLayout,
    meta: { auth: true },
    children: authChildRoutes('auth1')
  },
  {
    path: '/pages',
    name: 'pages',
    component: Default,
    meta: { auth: true },
    children: pagesChildRoutes('default')
  },
  {
    path: '/extra-pages',
    name: 'extra-pages',
    component: VerticleLayout,
    meta: { auth: true },
    children: defaultlayout('extra-pages')
  },
  {
    path: '/form',
    name: 'form',
    component: VerticleLayout,
    meta: { auth: true },
    children: formChildRoute('form')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})
export default router
