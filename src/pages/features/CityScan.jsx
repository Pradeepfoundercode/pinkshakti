import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import {
  MapPin,
  TrendingUp,
  Compass,
  ClipboardList,
  Users,
  ShieldCheck,
  User,
  Phone,
  Building2,
  Shield,
  AlertTriangle,
  Send,
  ChevronDown,
  CheckCircle2,
  Settings,
  FileText,
  ArrowRight,
  Check,
  Search,
} from 'lucide-react'
import BannerSlider from '../../components/common/BannerSlider'
import cityScanBanner from '../../assets/banner/cityEE.png'
import PhoneBanner from '../../components/common/PhoneBanner'
import {
  getDistricts,
  getZipcodes,
  getPoliceStations,
  getProblems,
  storeCityScan,
} from '../../services/cityscan.services'

// Reusable Premium UI Dropdown Component
function CustomDropdown({
  icon: Icon,
  label,
  placeholder,
  value,
  onChange,
  options = [],
  disabled = false,
  loading = false,
  error = '',
  searchable = true,
  searchPlaceholder = 'Search...',
  emptyText = 'No options available',
  isMulti = false,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef(null)
  const searchInputRef = useRef(null)

  // Close on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
        setSearchQuery('')
      }
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        setSearchQuery('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Auto focus search input when opening
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50)
    }
  }, [isOpen])

  // Display Content logic
  let displayContent = null
  if (isMulti) {
    const selectedArr = Array.isArray(value) ? value : []
    if (selectedArr.length === 0) {
      displayContent = <span className="text-slate-400 font-medium">{placeholder}</span>
    } else {
      displayContent = (
        <div className="flex items-center gap-1.5 flex-wrap py-0.5">
          {selectedArr.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-pink-100 text-[#e60067] border border-pink-200"
            >
              <span className="truncate max-w-[120px] sm:max-w-[160px]">{item}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onChange(selectedArr.filter((i) => i !== item))
                }}
                className="hover:text-pink-900 cursor-pointer font-bold ml-0.5 text-xs leading-none"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )
    }
  } else {
    const selectedOption = options.find((opt) => String(opt.value) === String(value))
    const displayLabel = selectedOption ? selectedOption.label : ''
    displayContent = (
      <span
        className={`truncate font-medium block flex-1 ${displayLabel ? 'text-slate-800 font-semibold' : 'text-slate-400'
          }`}
      >
        {loading ? 'Loading...' : displayLabel || placeholder}
      </span>
    )
  }

  const filteredOptions = options.filter((opt) =>
    opt.label?.toString().toLowerCase().includes(searchQuery.toLowerCase().trim())
  )

  const handleSelect = (val) => {
    if (isMulti) {
      const selectedArr = Array.isArray(value) ? [...value] : []
      const index = selectedArr.indexOf(val)
      if (index > -1) {
        selectedArr.splice(index, 1)
      } else {
        selectedArr.push(val)
      }
      onChange(selectedArr)
    } else {
      onChange(val)
      setIsOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <div className={`relative ${isOpen ? 'z-30' : 'z-10'}`} ref={dropdownRef}>
      {label && (
        <label className="block text-xs font-bold text-[#102849] mb-1.5">
          {label} <span className="text-[#e60067]">*</span>
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            setIsOpen((prev) => !prev)
            setSearchQuery('')
          }
        }}
        className={`w-full relative min-h-[42px] flex items-center pl-11 pr-8 py-2 bg-white border text-left rounded-xl text-xs sm:text-[12.5px] transition-all duration-200 shadow-2xs group cursor-pointer ${disabled
            ? 'bg-slate-100/90 border-slate-200 text-slate-400 cursor-not-allowed opacity-80'
            : error
              ? 'border-red-400 ring-2 ring-red-100'
              : isOpen
                ? 'border-[#e60067] ring-4 ring-pink-500/15 bg-white'
                : 'border-pink-200/90 hover:border-[#e60067]/60'
          }`}
      >
        {/* Left Icon badge */}
        <div
          className={`absolute left-2.5 top-2 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 pointer-events-none ${disabled
              ? 'bg-slate-200/80 text-slate-400'
              : isOpen
                ? 'bg-[#e60067] text-white shadow-xs'
                : 'bg-pink-100/80 text-[#e60067] group-hover:bg-[#e60067] group-hover:text-white'
            }`}
        >
          {loading ? (
            <div className="w-3.5 h-3.5 border-2 border-pink-200 border-t-[#e60067] rounded-full animate-spin" />
          ) : (
            Icon && <Icon className="w-3.5 h-3.5" />
          )}
        </div>

        {/* Selected content */}
        <div className="flex-1 overflow-hidden pr-2">
          {loading ? <span className="text-slate-400">Loading...</span> : displayContent}
        </div>

        {/* Right Chevron */}
        <div className="absolute right-2.5 top-3 flex items-center pointer-events-none">
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen
                ? 'rotate-180 text-[#e60067]'
                : disabled
                  ? 'text-slate-300'
                  : 'text-slate-400 group-hover:text-[#e60067]'
              }`}
          />
        </div>
      </button>

      {/* Floating Menu */}
      {isOpen && !disabled && (
        <div className="absolute z-50 left-0 right-0 mt-1.5 bg-white rounded-xl border border-pink-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {/* Search Bar if > 5 options */}
          {searchable && options.length > 5 && (
            <div className="p-2 border-b border-pink-100 bg-pink-50/40">
              <div className="relative flex items-center">
                <Search className="absolute left-2.5 w-3.5 h-3.5 text-slate-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-pink-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#e60067] focus:ring-2 focus:ring-pink-500/15"
                />
              </div>
            </div>
          )}

          {/* Options List */}
          <div className="max-h-56 overflow-y-auto divide-y divide-pink-50/60 custom-scrollbar">
            {filteredOptions.length === 0 ? (
              <div className="py-4 px-3 text-center text-xs text-slate-400 font-medium">
                {emptyText}
              </div>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = isMulti
                  ? Array.isArray(value) && value.includes(opt.value)
                  : String(opt.value) === String(value)

                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect(opt.value)}
                    className={`w-full text-left px-3.5 py-2.5 text-xs sm:text-[12.5px] transition-all duration-150 flex items-center justify-between group cursor-pointer ${isSelected
                        ? 'bg-pink-50 text-[#e60067] font-bold'
                        : 'text-slate-700 hover:bg-pink-50/70 hover:text-[#e60067] font-medium'
                      }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      {isMulti && (
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${isSelected
                              ? 'bg-[#e60067] border-[#e60067] text-white'
                              : 'border-slate-300 bg-white group-hover:border-pink-300'
                            }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      )}
                      <span className="truncate">{opt.label}</span>
                    </div>

                    {!isMulti && isSelected && (
                      <Check className="w-3.5 h-3.5 text-[#e60067] shrink-0" />
                    )}
                  </button>
                )
              })
            )}
          </div>

          {/* Multi-select bottom bar */}
          {isMulti && (
            <div className="p-2 border-t border-pink-100 bg-pink-50/30 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-500 font-medium pl-1">
                {Array.isArray(value) && value.length > 0
                  ? `${value.length} selected`
                  : 'Select one or more'}
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 bg-[#e60067] text-white rounded-lg text-[11px] font-bold hover:bg-[#c9005a] cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>
      )}

      {/* Validation Error */}
      {error && (
        <p className="text-[10.5px] font-semibold text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
}

function CityScan() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  // API Dropdown states
  const [districts, setDistricts] = useState([])
  const [zipcodes, setZipcodes] = useState([])
  const [policeStations, setPoliceStations] = useState([])
  const [problems, setProblems] = useState([])
  const [loadingDetails, setLoadingDetails] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    district: '',
    pincode: '',
    policeStation: '',
    problems: [],
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverMessage, setServerMessage] = useState({ type: '', text: '' })



  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Fetch initial districts and problems from API


  useEffect(() => {
    const fetchData = async () => {
      try {

        const districtRes = await getDistricts();
        setDistricts(districtRes.data);

        console.log("Districts:", districtRes.data);


        const zipcodeRes = await getProblems();
        setProblems(zipcodeRes.data);

        console.log("Zipcodes:", zipcodeRes.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch pincodes and police stations when a district is selected
  const handleDistrictChange = async (districtId) => {
    setFormData((prev) => ({
      ...prev,
      district: districtId,
      pincode: '',
      policeStation: '',
    }))

    setErrors((prev) => ({
      ...prev,
      district: '',
      pincode: '',
      policeStation: '',
    }))

    if (!districtId) {
      setZipcodes([])
      setPoliceStations([])
      return
    }

    setLoadingDetails(true)

    try {
      const [zipRes, policeRes] = await Promise.all([
        getZipcodes(districtId),
        getPoliceStations(districtId),
      ])

      setZipcodes(zipRes.data || [])
      setPoliceStations(policeRes.data || [])

      console.log('Pincodes:', zipRes.data)
      console.log('Police Stations:', policeRes.data)
    } catch (error) {
      console.error('Pincode/Police Station API Error:', error)
      setZipcodes([])
      setPoliceStations([])
    } finally {
      setLoadingDetails(false)
    }
  }

  const handleFieldChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }





  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'mobile') {
      const numericVal = value.replace(/\D/g, '').slice(0, 10)
      setFormData((prev) => ({ ...prev, [name]: numericVal }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name'
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Please enter your mobile number'
    } else if (formData.mobile.length !== 10) {
      newErrors.mobile = 'Mobile number must be 10 digits'
    }
    if (!formData.district) newErrors.district = 'Please select a district'
    if (!formData.pincode) newErrors.pincode = 'Please select a pincode'
    if (!formData.policeStation) newErrors.policeStation = 'Please select a police station'
    if (!formData.problems || formData.problems.length === 0) {
      newErrors.problems = 'Please select at least one problem'
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerMessage({ type: '', text: '' })
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const payload = {
        mobile: formData.mobile,
        name: formData.name,
        district: String(formData.district),
        pincode: String(formData.pincode),
        policestation: String(formData.policeStation),
        problems: formData.problems,
        category: 'Feel Safe',
      }

      const res = await storeCityScan(payload)

      if (res?.status || res?.success || res?.id) {
        setSubmitted(true)
        setServerMessage({
          type: 'success',
          text: res?.message || 'Thank you! Your City Scan report has been submitted successfully.',
        })
        setFormData({
          name: '',
          mobile: '',
          district: '',
          pincode: '',
          policeStation: '',
          problems: [],
        })
        setZipcodes([])
        setPoliceStations([])

        setTimeout(() => {
          setSubmitted(false)
          setServerMessage({ type: '', text: '' })
        }, 5000)
      } else {
        setServerMessage({
          type: 'error',
          text: res?.message || 'Failed to submit report. Please try again.',
        })
      }
    } catch (error) {
      console.error('Submit City Scan Error:', error)
      setServerMessage({
        type: 'error',
        text:
          error?.response?.data?.message ||
          'Failed to submit your City Scan report. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <div className="min-h-screen bg-transparent flex flex-col justify-between">
      {/* banner */}
      <BannerSlider
        images={[cityScanBanner]}
        autoPlay={false}
      />

      {/* Main Feature & Form Section (Exact spacing from Feature.jsx, Rich Modern UI) */}
      <section className="bg-transparent px-6 sm:px-10 lg:px-16 py-6 lg:py-8">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 items-stretch">

          {/* Left Column Card: How City Scan Helps? */}
          <div
            className={`w-full flex flex-col justify-between border border-pink-100 bg-[#fff5f8] rounded-3xl p-5 sm:p-6 lg:p-7 border border-pink-200/90 shadow-[0_8px_30px_-6px_rgba(230,0,103,0.06)] hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_16px_40px_-8px_rgba(230,0,103,0.12)] transition-all duration-500 ease-out delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Header */}
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white border border-pink-200/80 flex items-center justify-center shrink-0 shadow-xs text-[#e60067]">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="#e60067" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  {/* Scanner Box 4 Corners */}
                  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                  {/* Search Magnifying Glass Inside */}
                  <circle cx="11.5" cy="11.5" r="3.2" />
                  <path d="m13.8 13.8 3.2 3.2" />
                </svg>
              </div>
              <div>
                <h2 className="font-serif text-[25px] sm:text-[28px] lg:text-[32px] font-bold text-[#e60067] leading-tight">
                  {t("cityScan.howItHelps.title", { defaultValue: "How City Scan Helps?" })}
                </h2>
                <p className="text-[12.5px] sm:text-[13.5px] text-slate-600 mt-1.5 leading-snug">
                  {t("cityScan.howItHelps.subtitle", {
                    defaultValue: "Your inputs create valuable insights to make cities safer for women.",
                  })}
                </p>
              </div>
            </div>

            {/* 4 Feature Cards (2x2 Grid) - Slightly bigger logos, headings, and text */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 sm:gap-5 lg:gap-5.5 mt-5.5 sm:mt-6 lg:mt-6.5 mb-3 sm:mb-4 lg:mb-4.5 items-stretch">

              {/* 1. Highlight Concerns - Solid Bold Alert Triangle with White Exclamation */}
              <div className="h-full  rounded-2xl py-3 sm:py-3.5 px-3.5 sm:px-4 border border-pink-200/90 shadow-[0_3px_12px_rgba(230,0,103,0.05)] hover:shadow-[0_8px_22px_rgba(230,0,103,0.1)] hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 sm:gap-4 group cursor-default">
                <div className="w-11 h-11 sm:w-11.5 sm:h-11.5 rounded-full bg-white border border-pink-200/80 flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 sm:w-6.5 sm:h-6.5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M10.29 3.86L1.82 18C1.5 18.54 1.88 19.25 2.53 19.25H21.47C22.12 19.25 22.5 18.54 22.18 18L13.71 3.86C13.39 3.32 12.61 3.32 12.29 3.86L10.29 3.86Z"
                      fill="#e60067"
                    />
                    <path d="M12 9V13.8" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
                    <circle cx="12" cy="16.8" r="1.3" fill="white" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[13.5px] sm:text-[15px] font-bold text-[#102849] group-hover:text-[#e60067] transition-colors duration-200">
                    {t("cityScan.howItHelps.highlightConcerns.title", { defaultValue: "Highlight Concerns" })}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 mt-0.5 leading-relaxed">
                    {t("cityScan.howItHelps.highlightConcerns.desc", {
                      defaultValue: "Identify safety concerns in different areas.",
                    })}
                  </p>
                </div>
              </div>

              {/* 2. Data Insights - Bold Rising Trend Chart from Banner */}
              <div className="h-full  rounded-2xl py-3 sm:py-3.5 px-3.5 sm:px-4 border border-pink-200/90 shadow-[0_3px_12px_rgba(230,0,103,0.05)] hover:shadow-[0_8px_22px_rgba(230,0,103,0.1)] hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 sm:gap-4 group cursor-default">
                <div className="w-11 h-11 sm:w-11.5 sm:h-11.5 rounded-full bg-white border border-pink-200/80 flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 sm:w-6.5 sm:h-6.5" viewBox="0 0 24 24" fill="none">
                    <path d="M3 14.5L7.5 9.5L12 12.5L19 4.5" stroke="#e60067" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    <polygon points="20.5,4 16,4.5 19.5,8" fill="#e60067" stroke="#e60067" strokeWidth="0.8" strokeLinejoin="round" />
                    <rect x="4" y="15.5" width="3.2" height="5.5" rx="0.9" fill="#e60067" />
                    <rect x="9.4" y="11.5" width="3.2" height="9.5" rx="0.9" fill="#e60067" />
                    <rect x="14.8" y="7.5" width="3.2" height="13.5" rx="0.9" fill="#e60067" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[13.5px] sm:text-[15px] font-bold text-[#102849] group-hover:text-[#e60067] transition-colors duration-200">
                    {t("cityScan.howItHelps.dataInsights.title", { defaultValue: "Data Insights" })}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 mt-0.5 leading-relaxed">
                    {t("cityScan.howItHelps.dataInsights.desc", {
                      defaultValue: "Helps understand city-wise trends and common issues.",
                    })}
                  </p>
                </div>
              </div>

              {/* 3. Community Support - Bold People Silhouette from Banner */}
              <div className="h-full  rounded-2xl py-3 sm:py-3.5 px-3.5 sm:px-4 border border-pink-200/90 shadow-[0_3px_12px_rgba(230,0,103,0.05)] hover:shadow-[0_8px_22px_rgba(230,0,103,0.1)] hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 sm:gap-4 group cursor-default">
                <div className="w-11 h-11 sm:w-11.5 sm:h-11.5 rounded-full bg-white border border-pink-200/80 flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 sm:w-6.5 sm:h-6.5" viewBox="0 0 24 24" fill="none">
                    <circle cx="6" cy="9.5" r="2.8" fill="#e60067" />
                    <path d="M1.5 18C1.5 15.2 3.5 13.5 6 13.5C7.2 13.5 8.2 13.9 9 14.6C8.3 15.4 7.9 16.4 7.9 17.5V18H1.5Z" fill="#e60067" />
                    <circle cx="18" cy="9.5" r="2.8" fill="#e60067" />
                    <path d="M22.5 18C22.5 15.2 20.5 13.5 18 13.5C16.8 13.5 15.8 13.9 15 14.6C15.7 15.4 16.1 16.4 16.1 17.5V18H22.5Z" fill="#e60067" />
                    <circle cx="12" cy="8.5" r="3.2" fill="#e60067" />
                    <path d="M6.5 18.5C6.5 15.2 9 12.8 12 12.8C15 12.8 17.5 15.2 17.5 18.5V19H6.5V18.5Z" fill="#e60067" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[13.5px] sm:text-[15px] font-bold text-[#102849] group-hover:text-[#e60067] transition-colors duration-200">
                    {t("cityScan.howItHelps.communitySupport.title", { defaultValue: "Community Support" })}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 mt-0.5 leading-relaxed">
                    {t("cityScan.howItHelps.communitySupport.desc", {
                      defaultValue: "Supports better planning for safer cities.",
                    })}
                  </p>
                </div>
              </div>

              {/* 4. Positive Change - Bold Shield with Check from Banner */}
              <div className="h-full  rounded-2xl py-3 sm:py-3.5 px-3.5 sm:px-4 border border-pink-200/90 shadow-[0_3px_12px_rgba(230,0,103,0.05)] hover:shadow-[0_8px_22px_rgba(230,0,103,0.1)] hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 sm:gap-4 group cursor-default">
                <div className="w-11 h-11 sm:w-11.5 sm:h-11.5 rounded-full bg-white border border-pink-200/80 flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 sm:w-6.5 sm:h-6.5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3.5 5.8V11.5C3.5 17 7.1 21.4 12 22.8C16.9 21.4 20.5 17 20.5 11.5V5.8L12 2Z" fill="#e60067" />
                    <path d="M8 12L10.8 14.8L16 9.2" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[13.5px] sm:text-[15px] font-bold text-[#102849] group-hover:text-[#e60067] transition-colors duration-200">
                    {t("cityScan.howItHelps.positiveChange.title", { defaultValue: "Positive Change" })}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 mt-0.5 leading-relaxed">
                    {t("cityScan.howItHelps.positiveChange.desc", {
                      defaultValue: "Contributes to safer and more secure environments for women.",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Card: Submit City Scan Form (Modern Elevated UI) */}
          <div
            className={`w-full border border-pink-100 bg-[#fff5f8] rounded-3xl p-5 sm:p-6 lg:p-7 border border-pink-200/90 shadow-[0_8px_30px_-6px_rgba(230,0,103,0.06)] hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_16px_40px_-8px_rgba(230,0,103,0.12)] transition-all duration-500 ease-out delay-300 flex flex-col justify-between ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div>
              {/* Header */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white border border-pink-200/80 flex items-center justify-center shrink-0 shadow-xs">
                  {/* Bold Solid Clipboard Form Icon matching banner style */}
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="3.5" width="16" height="17.5" rx="3" fill="#e60067" />
                    <rect x="8" y="1.5" width="8" height="4" rx="1.5" fill="white" />
                    <circle cx="12" cy="3.5" r="1" fill="#e60067" />
                    <path d="M8 9H16M8 13H16M8 17H13" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-[25px] sm:text-[28px] lg:text-[32px] font-bold text-[#e60067] leading-tight">
                    {t("cityScan.form.title", { defaultValue: "Submit City Scan" })}
                  </h2>
                  <p className="text-[12.5px] sm:text-[13.5px] text-slate-600 mt-1.5 leading-snug">
                    {t("cityScan.form.subtitle", {
                      defaultValue: "Share your experience and help us build safer cities for women.",
                    })}
                  </p>
                </div>
              </div>

              {/* Server status message */}
              {serverMessage.text && (
                <div
                  className={`mt-4 p-3.5 rounded-2xl border text-xs sm:text-[13px] flex items-center gap-2.5 shadow-sm ${serverMessage.type === 'error'
                      ? 'bg-red-50 border-red-200 text-red-700'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    }`}
                >
                  {serverMessage.type === 'error' ? (
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  <span className="font-medium">{serverMessage.text}</span>
                </div>
              )}

              {/* Modern Form */}
              <form onSubmit={handleSubmit} className="mt-7 sm:mt-8 space-y-4">
                {/* Row 1: Name and Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#102849] mb-1.5">
                      {t("cityScan.form.nameLabel", { defaultValue: "Name" })} <span className="text-[#e60067]">*</span>
                    </label>
                    <div className="relative flex items-center group">
                      <div className="absolute left-2.5 w-7 h-7 rounded-lg bg-pink-100/80 text-[#e60067] flex items-center justify-center shrink-0 group-focus-within:bg-[#e60067] group-focus-within:text-white transition-all duration-200 pointer-events-none">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t("cityScan.form.namePlaceholder", { defaultValue: "Enter your name" })}
                        className={`w-full pl-11 pr-3.5 py-2.5 sm:py-2.5 bg-white border ${errors.name ? "border-red-400 ring-2 ring-red-100" : "border-pink-200/90"
                          } rounded-xl text-xs sm:text-[13px] text-slate-800 placeholder:text-slate-400 font-medium shadow-2xs focus:outline-none focus:border-[#e60067] focus:ring-4 focus:ring-pink-500/15 focus:bg-white transition-all duration-200`}
                      />
                    </div>
                    {errors.name && <p className="text-[10.5px] font-semibold text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-[#102849] mb-1.5">
                      {t("cityScan.form.mobileLabel", { defaultValue: "Mobile Number" })} <span className="text-[#e60067]">*</span>
                    </label>
                    <div className="relative flex items-center group">
                      <div className="absolute left-2.5 w-7 h-7 rounded-lg bg-pink-100/80 text-[#e60067] flex items-center justify-center shrink-0 group-focus-within:bg-[#e60067] group-focus-within:text-white transition-all duration-200 pointer-events-none">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="tel"
                        name="mobile"
                        maxLength={10}
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder={t("cityScan.form.mobilePlaceholder", { defaultValue: "Enter your mobile number" })}
                        className={`w-full pl-11 pr-3.5 py-2.5 sm:py-2.5 bg-white border ${errors.mobile ? "border-red-400 ring-2 ring-red-100" : "border-pink-200/90"
                          } rounded-xl text-xs sm:text-[13px] text-slate-800 placeholder:text-slate-400 font-medium shadow-2xs focus:outline-none focus:border-[#e60067] focus:ring-4 focus:ring-pink-500/15 focus:bg-white transition-all duration-200`}
                      />
                    </div>
                    {errors.mobile && <p className="text-[10.5px] font-semibold text-red-500 mt-1">{errors.mobile}</p>}
                  </div>
                </div>

                {/* Row 2: District, Pincode, Police Station */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 relative z-20">
                  {/* District */}
                  <CustomDropdown
                    icon={Building2}
                    label={t("cityScan.form.districtLabel", { defaultValue: "Select District" })}
                    placeholder={t("cityScan.form.districtLabel", { defaultValue: "Select District" })}
                    value={formData.district}
                    onChange={handleDistrictChange}
                    options={districts.map((dist) => ({
                      value: String(dist.id),
                      label: dist.district,
                    }))}
                    error={errors.district}
                    searchPlaceholder="Search district..."
                    emptyText="No districts found"
                  />

                  {/* Pincode */}
                  <CustomDropdown
                    icon={MapPin}
                    label={t("cityScan.form.pincodeLabel", { defaultValue: "Select Pincode" })}
                    placeholder={
                      loadingDetails
                        ? "Loading Pincodes..."
                        : !formData.district
                          ? "Select District first"
                          : t("cityScan.form.pincodeLabel", { defaultValue: "Select Pincode" })
                    }
                    value={formData.pincode}
                    onChange={(val) => handleFieldChange("pincode", val)}
                    options={zipcodes.map((item) => {
                      const pin = String(item.Pincode || item.pincode || '')
                      const idVal = String(item.id || pin)
                      return { value: idVal, label: pin }
                    })}
                    disabled={!formData.district || loadingDetails}
                    loading={loadingDetails}
                    error={errors.pincode}
                    searchPlaceholder="Search pincode..."
                    emptyText="No pincodes available"
                  />

                  {/* Police Station */}
                  <CustomDropdown
                    icon={Shield}
                    label={t("cityScan.form.policeStationLabel", { defaultValue: "Select Police Station" })}
                    placeholder={
                      loadingDetails
                        ? "Loading Police Stations..."
                        : !formData.district
                          ? "Select District first"
                          : t("cityScan.form.policeStationLabel", { defaultValue: "Select Police Station" })
                    }
                    value={formData.policeStation}
                    onChange={(val) => handleFieldChange("policeStation", val)}
                    options={policeStations.map((ps) => ({
                      value: String(ps.id || ps.name),
                      label: ps.name || ps.police_station || String(ps.id),
                    }))}
                    disabled={!formData.district || loadingDetails}
                    loading={loadingDetails}
                    error={errors.policeStation}
                    searchPlaceholder="Search police station..."
                    emptyText="No police stations available"
                  />
                </div>

                {/* Row 3: Select Problem (Multi-select) */}
                <div className="relative z-10">
                  <CustomDropdown
                    icon={AlertTriangle}
                    label={t("cityScan.form.problemLabel", { defaultValue: "Select Problem(s)" })}
                    placeholder={t("cityScan.form.problemLabel", { defaultValue: "Select one or more problems" })}
                    value={formData.problems}
                    onChange={(val) => handleFieldChange("problems", val)}
                    options={problems.map((p) => ({
                      value: p.problem_name,
                      label: p.problem_name,
                    }))}
                    isMulti={true}
                    error={errors.problems}
                    searchPlaceholder="Search problems..."
                    emptyText="No problems found"
                  />
                </div>

                {/* Submit Button - Wide, sleek height (py-2.5), zero shadow, rich gradient */}
                <div className="pt-2 sm:pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#e60067] via-[#f01377] to-[#e60067] hover:from-[#c9005a] hover:to-[#b50050] text-white py-2.5 px-6 rounded-xl font-bold text-xs sm:text-[13.5px] tracking-wide flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.99] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    <Send className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1" />
                    <span>
                      {isSubmitting
                        ? t("cityScan.form.submitting", { defaultValue: "Submitting..." })
                        : t("cityScan.form.submitBtn", { defaultValue: "Submit City Scan" })}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Simple Steps to Submit Section - Matching Upper Section Width & Background with Smooth Animations */}
      <section className="bg-transparent px-6 sm:px-10 lg:px-16 py-2.5 sm:py-4 lg:py-6">
        <div
          className={`mx-auto max-w-[1440px] bg-gradient-to-b from-[#fff6fa] via-[#fff9fc] to-[#ffecf5] border border-pink-200/90 rounded-3xl p-4 sm:p-5 shadow-[0_8px_30px_-6px_rgba(230,0,103,0.06)] relative overflow-hidden transition-all duration-700 ease-out delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Subtle background decorative glow */}
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-pink-200/20 rounded-full blur-xl pointer-events-none" />

          {/* Section Header with same font-serif style as upper section */}
          <div
            className={`flex items-center gap-3 sm:gap-3.5 mb-4.5 sm:mb-6 group cursor-default transition-all duration-700 ease-out delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white border border-pink-200/80 flex items-center justify-center text-[#e60067] shadow-xs shrink-0 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-105">
              <Settings className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.3] fill-[#e60067]/15" />
            </div>
            <div>
              <h2 className="font-serif text-[20px] sm:text-[23px] lg:text-[26px] font-bold text-[#e60067] leading-tight transition-colors duration-300 group-hover:text-[#c9005a]">
                {t("cityScan.steps.title", { defaultValue: "Simple Steps to Submit" })}
              </h2>
              <p className="text-slate-600 font-medium text-[11px] sm:text-[12px] leading-tight mt-0.5">
                {t("cityScan.steps.subtitle", { defaultValue: "Share your experience in just a few steps." })}
              </p>
            </div>
          </div>

          {/* 4 Steps Row - Smooth Staggered Load & Interactive Hover Micro-Animations */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2.5 lg:gap-3">
            {/* Step 01 */}
            <div
              className={`flex-1 w-full relative bg-white rounded-2xl pt-3.5 pb-3 px-3 sm:px-3.5 border border-pink-200/80 shadow-[0_3px_12px_rgba(230,0,103,0.04)] hover:shadow-[0_12px_28px_rgba(230,0,103,0.12)] hover:border-[#e60067]/50 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-center text-center group cursor-pointer delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full bg-[#e60067] text-white font-bold text-[11px] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#c9005a]">
                01
              </div>
              <div className="my-1 sm:my-1.5 text-[#e60067] transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-0.5">
                <User className="w-7 h-7 sm:w-8 sm:h-8 fill-[#e60067] text-[#e60067]" />
              </div>
              <h3 className="font-bold text-[#102849] text-[13.5px] sm:text-[14.5px] mb-0.5 transition-colors duration-200 group-hover:text-[#e60067]">
                {t("cityScan.steps.step1Title", { defaultValue: "Enter Details" })}
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-[11.5px] leading-snug">
                {t("cityScan.steps.step1Desc", { defaultValue: "Fill in your name and mobile number." })}
              </p>
            </div>

            {/* Arrow 1 */}
            <div
              className={`hidden lg:flex items-center justify-center shrink-0 text-[#e60067]/70 px-0.5 transition-all duration-500 ease-out delay-350 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
            >
              <ArrowRight className="w-4.5 h-4.5 stroke-[2.4] animate-pulse" />
            </div>

            {/* Step 02 */}
            <div
              className={`flex-1 w-full relative bg-white rounded-2xl pt-3.5 pb-3 px-3 sm:px-3.5 border border-pink-200/80 shadow-[0_3px_12px_rgba(230,0,103,0.04)] hover:shadow-[0_12px_28px_rgba(230,0,103,0.12)] hover:border-[#e60067]/50 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-center text-center group cursor-pointer delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full bg-[#e60067] text-white font-bold text-[11px] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#c9005a]">
                02
              </div>
              <div className="my-1 sm:my-1.5 text-[#e60067] transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-0.5">
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 fill-[#e60067] text-white" />
              </div>
              <h3 className="font-bold text-[#102849] text-[13.5px] sm:text-[14.5px] mb-0.5 transition-colors duration-200 group-hover:text-[#e60067]">
                {t("cityScan.steps.step2Title", { defaultValue: "Select Location" })}
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-[11.5px] leading-snug">
                {t("cityScan.steps.step2Desc", { defaultValue: "Choose district, pincode and police station." })}
              </p>
            </div>

            {/* Arrow 2 */}
            <div
              className={`hidden lg:flex items-center justify-center shrink-0 text-[#e60067]/70 px-0.5 transition-all duration-500 ease-out delay-450 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
            >
              <ArrowRight className="w-4.5 h-4.5 stroke-[2.4] animate-pulse" />
            </div>

            {/* Step 03 */}
            <div
              className={`flex-1 w-full relative bg-white rounded-2xl pt-3.5 pb-3 px-3 sm:px-3.5 border border-pink-200/80 shadow-[0_3px_12px_rgba(230,0,103,0.04)] hover:shadow-[0_12px_28px_rgba(230,0,103,0.12)] hover:border-[#e60067]/50 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-center text-center group cursor-pointer delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full bg-[#e60067] text-white font-bold text-[11px] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#c9005a]">
                03
              </div>
              <div className="my-1 sm:my-1.5 text-[#e60067] transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-0.5">
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 fill-[#e60067] text-white" />
              </div>
              <h3 className="font-bold text-[#102849] text-[13.5px] sm:text-[14.5px] mb-0.5 transition-colors duration-200 group-hover:text-[#e60067]">
                {t("cityScan.steps.step3Title", { defaultValue: "Select Problem" })}
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-[11.5px] leading-snug">
                {t("cityScan.steps.step3Desc", { defaultValue: "Choose the safety concern from the list." })}
              </p>
            </div>

            {/* Arrow 3 */}
            <div
              className={`hidden lg:flex items-center justify-center shrink-0 text-[#e60067]/70 px-0.5 transition-all duration-500 ease-out delay-550 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
            >
              <ArrowRight className="w-4.5 h-4.5 stroke-[2.4] animate-pulse" />
            </div>

            {/* Step 04 */}
            <div
              className={`flex-1 w-full relative bg-white rounded-2xl pt-3.5 pb-3 px-3 sm:px-3.5 border border-pink-200/80 shadow-[0_3px_12px_rgba(230,0,103,0.04)] hover:shadow-[0_12px_28px_rgba(230,0,103,0.12)] hover:border-[#e60067]/50 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-center text-center group cursor-pointer delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full bg-[#e60067] text-white font-bold text-[11px] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#c9005a]">
                04
              </div>
              <div className="my-1 sm:my-1.5 text-[#e60067] transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-0.5">
                <Send className="w-7 h-7 sm:w-8 sm:h-8 fill-[#e60067] text-[#e60067]" />
              </div>
              <h3 className="font-bold text-[#102849] text-[13.5px] sm:text-[14.5px] mb-0.5 transition-colors duration-200 group-hover:text-[#e60067]">
                {t("cityScan.steps.step4Title", { defaultValue: "Submit Scan" })}
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-[11.5px] leading-snug">
                {t("cityScan.steps.step4Desc", { defaultValue: "Click on submit to share your experience." })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Phone Banner */}
      <PhoneBanner />
    </div>
  )
}

export default CityScan
