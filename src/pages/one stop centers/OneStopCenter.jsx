import React, { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import PageBanner from '../../components/common/PageBanner'
import PhoneBanner from '../../components/common/PhoneBanner'
import {
  oneStopCentersList,
  oneStopCenterDistricts,
  oneStopCenterCities,
  oneStopCenterServices,
} from '../../constants'
import { getOneStopCenters } from '../../services/onestop.service'
import {
  Search,
  RotateCcw,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  User,
  Loader2,
} from 'lucide-react'

// Helper function to format UPPERCASE strings into Title Case
const formatTitleCase = (str) => {
  if (!str) return ''
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function OneStopCenter() {
  const { t } = useTranslation()
  const [centers, setCenters] = useState([])
  const [totalRecords, setTotalRecords] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Fetch One Stop Centers from API
  useEffect(() => {
    let isMounted = true

    const fetchCenters = async () => {
      try {
        setIsLoading(true)
        const response = await getOneStopCenters()
        if (isMounted) {
          if (response?.status && Array.isArray(response.data)) {
            setCenters(response.data)
            setTotalRecords(response.total_records || response.data.length)
          } else if (Array.isArray(response)) {
            setCenters(response)
            setTotalRecords(response.length)
          } else {
            setCenters(oneStopCentersList)
            setTotalRecords(oneStopCentersList.length)
          }
        }
      } catch (error) {
        console.error('Failed to fetch One Stop Centers from API:', error)
        if (isMounted) {
          setCenters(oneStopCentersList)
          setTotalRecords(oneStopCentersList.length)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchCenters()

    return () => {
      isMounted = false
    }
  }, [])

  // Dynamic list of unique districts from API (or fallback)
  const availableDistricts = useMemo(() => {
    if (!centers || centers.length === 0) return oneStopCenterDistricts
    const unique = Array.from(
      new Set(centers.map((c) => formatTitleCase(c.district?.trim())).filter(Boolean))
    )
    return unique.sort((a, b) => a.localeCompare(b))
  }, [centers])

  // Filter centers based on selections
  const filteredCenters = useMemo(() => {
    return centers.filter((center) => {
      const centerDist = center.district || ''
      const centerAddress = center.osc_address || center.address || ''
      const centerOfficer = center.concerned_officer || ''
      const centerDesignation = center.designation || ''
      const centerPhone = center.phone || ''
      const centerEmail = center.email || ''
      const centerName = center.name || `One Stop Center, ${formatTitleCase(centerDist)}`

      const matchDistrict = selectedDistrict
        ? centerDist.toLowerCase() === selectedDistrict.toLowerCase()
        : true

      const matchCity = selectedCity
        ? (center.city
          ? center.city.toLowerCase() === selectedCity.toLowerCase()
          : centerAddress.toLowerCase().includes(selectedCity.toLowerCase()) ||
          centerDist.toLowerCase() === selectedCity.toLowerCase())
        : true

      const query = searchQuery.trim().toLowerCase()
      const matchQuery = query
        ? centerName.toLowerCase().includes(query) ||
        centerDist.toLowerCase().includes(query) ||
        centerAddress.toLowerCase().includes(query) ||
        centerOfficer.toLowerCase().includes(query) ||
        centerDesignation.toLowerCase().includes(query) ||
        centerPhone.toLowerCase().includes(query) ||
        centerEmail.toLowerCase().includes(query)
        : true

      return matchDistrict && matchCity && matchQuery
    })
  }, [centers, selectedDistrict, selectedCity, searchQuery])

  // Reset all filters
  const handleReset = () => {
    setSelectedDistrict('')
    setSelectedCity('')
    setSearchQuery('')
    setCurrentPage(1)
  }

  // Pagination calculation
  const totalItems = filteredCenters.length
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentCenters = filteredCenters.slice(startIndex, startIndex + itemsPerPage)

  // Sliding window pagination: 5 visible buttons that shift as the user advances
  const maxVisiblePages = 5
  const { visiblePages, startPage, endPage } = useMemo(() => {
    if (totalPages <= maxVisiblePages) {
      const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
      return {
        visiblePages: pages,
        startPage: 1,
        endPage: totalPages,
      }
    }

    let start = 1
    // Shift window when currentPage is 5 or more (e.g., page 5 -> [2, 3, 4, 5, 6])
    if (currentPage >= maxVisiblePages) {
      start = currentPage - maxVisiblePages + 2
    }

    // Ensure we don't overflow totalPages
    if (start + maxVisiblePages - 1 > totalPages) {
      start = totalPages - maxVisiblePages + 1
    }

    const pages = Array.from({ length: maxVisiblePages }, (_, i) => start + i)
    return {
      visiblePages: pages,
      startPage: start,
      endPage: start + maxVisiblePages - 1,
    }
  }, [totalPages, currentPage])

  return (
    <>
      <PageBanner
        alt="One Stop Centers - Pink Shakti"
        title={
          <>
            <span className="text-[#e60067]">{t("oneStopCenter.banner.titlePink", { defaultValue: "One Stop" })}</span>{' '}
            <span className="text-[#102849]">{t("oneStopCenter.banner.titleNavy", { defaultValue: "Centers" })}</span>
          </>
        }
        description={
          <>
            <span className="block font-bold text-[#102849] text-sm sm:text-base lg:text-[1.1rem] mb-1.5 sm:mb-2">
              {t("oneStopCenter.banner.subtitleBold", { defaultValue: "Support. Safety. Assistance. All in One Place." })}
            </span>
            <span>
              {t("oneStopCenter.banner.subtitleDesc", { defaultValue: "One Stop Centers (OSC) provide integrated support and assistance to women affected by violence, under one roof, including medical aid, police assistance, legal support, counseling and temporary shelter." })}
            </span>
          </>
        }
      />

      {/* Main Section */}
      <section className="bg-white px-4 py-8 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-[1400px]">
          {/* Search & Filter Header Box */}
          <div className="rounded-2xl sm:rounded-3xl border border-pink-100 bg-[#fff7fa] p-5 sm:p-7 shadow-sm mb-8 transition-all duration-300 hover:shadow-md">
            {/* Header Title with Pink Search Icon */}
            <div className="flex items-start sm:items-center gap-3.5 mb-6">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#e60067] text-white shadow-md shadow-pink-500/20">
                <Search className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#102849]">
                  {t("oneStopCenter.searchBox.titlePrefix", { defaultValue: "Find a" })}{' '}
                  <span className="text-[#e60067]">{t("oneStopCenter.searchBox.titlePink", { defaultValue: "One Stop Center" })}</span>{' '}
                  {t("oneStopCenter.searchBox.titleSuffix", { defaultValue: "Near You" })}
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                  {t("oneStopCenter.searchBox.subtitle", { defaultValue: "Search by district, city or center name to get location, contact details and services available." })}
                </p>
              </div>
            </div>

            {/* Filter Inputs Grid */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setCurrentPage(1)
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 items-end"
            >
              {/* District Dropdown */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  {t("oneStopCenter.searchBox.districtLabel", { defaultValue: "District" })} <span className="text-[#e60067]">*</span>
                </label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => {
                    setSelectedDistrict(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#102849] focus:border-[#e60067] focus:outline-none transition-all shadow-xs"
                >
                  <option value="">{t("oneStopCenter.searchBox.allDistricts", { defaultValue: "All Districts" })}</option>
                  {availableDistricts.map((dist) => (
                    <option key={dist} value={dist}>
                      {dist}
                    </option>
                  ))}
                </select>
              </div>

              {/* City/Area Dropdown */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  {t("oneStopCenter.searchBox.cityAreaLabel", { defaultValue: "City/Area" })} <span className="text-[#e60067]">*</span>
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#102849] focus:border-[#e60067] focus:outline-none transition-all shadow-xs"
                >
                  <option value="">{t("oneStopCenter.searchBox.selectCityArea", { defaultValue: "Select City/Area" })}</option>
                  {oneStopCenterCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Center Name Input */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  {t("oneStopCenter.searchBox.searchLabel", { defaultValue: "Center / Officer / Keyword" })}
                </label>
                <input
                  type="text"
                  placeholder={t("oneStopCenter.searchBox.searchPlaceholder", { defaultValue: "Enter center name, officer..." })}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#102849] placeholder:text-gray-400 focus:border-[#e60067] focus:outline-none transition-all shadow-xs"
                />
              </div>

              {/* Action Buttons */}
              <div className="lg:col-span-3 flex items-center gap-2.5 sm:gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#e60067] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#c40057] active:scale-95 cursor-pointer"
                >
                  <Search className="h-4 w-4" />
                  <span>{t("oneStopCenter.searchBox.searchButton", { defaultValue: "Search" })}</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-pink-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-[#e60067] hover:text-[#e60067] active:scale-95 cursor-pointer"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>{t("oneStopCenter.searchBox.reset", { defaultValue: "Reset" })}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Results Layout: Left List + Right Services Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Centers List Column */}
            <div className="lg:col-span-8">
              {/* Count Title */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-[#102849]">
                  {t("oneStopCenter.results.total", { defaultValue: "Total" })}{' '}
                  <span className="text-[#e60067]">
                    {selectedDistrict || selectedCity || searchQuery
                      ? totalItems
                      : totalRecords || centers.length || 74}
                  </span>{' '}
                  {t("oneStopCenter.results.totalCentersInUP", { defaultValue: "One Stop Centers in Uttar Pradesh" })}
                </h3>
              </div>

              {/* Cards List or Loading */}
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-16 rounded-2xl border border-pink-100 bg-[#fff7fa] text-center">
                  <Loader2 className="h-8 w-8 animate-spin text-[#e60067] mb-3" />
                  <p className="text-sm font-semibold text-gray-700">{t("oneStopCenter.results.loading", { defaultValue: "Loading One Stop Centers..." })}</p>
                  <p className="text-xs text-gray-400 mt-1">{t("oneStopCenter.results.loadingSub", { defaultValue: "Fetching latest records from government directory" })}</p>
                </div>
              ) : currentCenters.length > 0 ? (
                <div className="space-y-3.5 sm:space-y-4">
                  {currentCenters.map((center, index) => {
                    const centerNumber = startIndex + index + 1
                    const centerName = center.name || ` ${formatTitleCase(center.district)}`
                    const centerAddress = center.osc_address || center.address
                    const formattedPhone = center.phone
                      ? center.phone.trim().replace(/\s*,\s*|\s{2,}/g, ', ')
                      : null

                    return (
                      <div
                        key={center.id || index}
                        className="group rounded-2xl border border-pink-100 bg-[#fff7fa] p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-pink-200 hover:shadow-md"
                      >
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                          {/* Left Number & Details */}
                          <div className="flex items-start gap-3.5 flex-1 min-w-0">
                            {/* Number Badge */}
                            <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-pink-100 font-bold text-[#e60067] text-sm sm:text-base border border-pink-200/60 shadow-xs">
                              {centerNumber}
                            </div>

                            {/* Center Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <h4 className="font-bold text-sm sm:text-base text-[#102849]">
                                  {centerName}
                                </h4>
                              </div>

                              {centerAddress && (
                                <p className="text-xs text-gray-500 flex items-start gap-1.5 mb-1.5">
                                  <MapPin className="h-3.5 w-3.5 text-[#e60067] shrink-0 mt-0.5" />
                                  <span className="line-clamp-2 leading-relaxed">{centerAddress}</span>
                                </p>
                              )}


                              {center.concerned_officer && (
                                <div className="text-xs text-gray-700 flex items-center gap-1.5 mt-2 bg-white/70 border border-pink-100/80 rounded-lg py-1 w-fit">
                                  <User className="h-3.5 w-3.5 text-[#e60067] shrink-0" />
                                  <span className="font-semibold text-gray-800">{t("oneStopCenter.results.officerLabel", { defaultValue: "Officer:" })}</span>{' '}
                                  <span>{center.concerned_officer.trim()}</span>
                                  {center.designation && (
                                    <span className="text-gray-500 font-normal">
                                      • {center.designation.trim()}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Contact Info Column */}
                          <div className="w-full sm:w-auto shrink-0 space-y-1.5 text-xs text-gray-600 pt-2 sm:pt-0 border-t sm:border-t-0 border-pink-50">
                            {formattedPhone && (
                              <p className="flex items-center gap-1.5">
                                <Phone className="h-3.5 w-3.5 text-[#e60067] shrink-0" />
                                <span className="font-medium text-gray-700">{formattedPhone}</span>
                              </p>
                            )}
                            {center.email && (
                              <p className="flex items-center gap-1.5">
                                <Mail className="h-3.5 w-3.5 text-[#e60067] shrink-0" />
                                <a
                                  href={`mailto:${center.email.trim()}`}
                                  className="hover:text-[#e60067] hover:underline transition-colors"
                                >
                                  {center.email.trim()}
                                </a>
                              </p>
                            )}
                            <p className="flex items-center gap-1.5 text-gray-500">
                              <Clock className="h-3.5 w-3.5 text-[#e60067] shrink-0" />
                              <span>{center.timing || t("oneStopCenter.results.support24x7", { defaultValue: "24 x 7 Support" })}</span>
                            </p>

                            {/* Action Button: View on Map directly under 24x7 */}
                            <div className="pt-1.5">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault()
                                  if (centerAddress || center.district) {
                                    window.open(
                                      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                        (centerAddress || `${center.district} One Stop Center`) + ', Uttar Pradesh'
                                      )}`,
                                      '_blank'
                                    )
                                  }
                                }}
                                className="flex w-fit items-center gap-1 rounded-full border border-pink-200/60 bg-pink-50/50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[#e60067] transition-all hover:bg-pink-100 hover:border-pink-300 active:scale-95 cursor-pointer"
                              >
                                <MapPin className="h-3 w-3" />
                                {t("oneStopCenter.results.viewOnMap", { defaultValue: "View on Map" })}
                              </button>
                            </div>
                          </div>

                          {/* Empty 3rd column preserved to maintain exact original layout spacing */}
                          <div className="hidden sm:block sm:w-12 shrink-0"></div>

                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-pink-200 bg-[#fff7fa] p-8 text-center">
                  <p className="font-semibold text-gray-700 text-sm sm:text-base">
                    {t("oneStopCenter.results.noCenters", { defaultValue: "No centers found matching your filter criteria." })}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#e60067] hover:underline cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    {t("oneStopCenter.results.resetAll", { defaultValue: "Reset all filters" })}
                  </button>
                </div>
              )}

              {/* Pagination Section */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-pink-100/80 mt-6">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Prev Button */}
                  <button
                    type="button"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-pink-200 bg-white text-gray-600 transition-colors hover:border-[#e60067] hover:text-[#e60067] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  {/* Sliding Page Numbers (5 boxes: shifts directly, e.g. 1 2 3 4 5 -> 2 3 4 5 6) */}
                  {visiblePages.map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold transition-all cursor-pointer ${currentPage === page
                        ? 'bg-[#e60067] text-white shadow-sm shadow-pink-500/20'
                        : 'border border-pink-200 bg-white text-gray-700 hover:border-[#e60067] hover:text-[#e60067]'
                        }`}
                    >
                      {page}
                    </button>
                  ))}

                  {/* End Ellipsis & Last Page Button */}
                  {endPage < totalPages && (
                    <>
                      <span className="px-1 text-gray-400 text-xs">...</span>
                      <button
                        type="button"
                        onClick={() => setCurrentPage(totalPages)}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold transition-all cursor-pointer ${currentPage === totalPages
                          ? 'bg-[#e60067] text-white shadow-sm shadow-pink-500/20'
                          : 'border border-pink-200 bg-white text-gray-700 hover:border-[#e60067] hover:text-[#e60067]'
                          }`}
                      >
                        {totalPages}
                      </button>
                    </>
                  )}

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-pink-200 bg-white text-gray-600 transition-colors hover:border-[#e60067] hover:text-[#e60067] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Summary Info */}
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {t("oneStopCenter.results.showing", { defaultValue: "Showing" })}{' '}
                  {totalItems === 0 ? 0 : startIndex + 1} {t("oneStopCenter.results.to", { defaultValue: "to" })}{' '}
                  {Math.min(startIndex + itemsPerPage, totalItems)} {t("oneStopCenter.results.of", { defaultValue: "of" })}{' '}
                  {selectedDistrict || selectedCity || searchQuery
                    ? totalItems
                    : totalRecords || centers.length || 74}{' '}
                  {t("oneStopCenter.results.centersWord", { defaultValue: "centers" })}
                </p>
              </div>
            </div>

            {/* Right Column: Services Available at One Stop Centers */}
            <div className="lg:col-span-4 mt-10 ">
              <div className="rounded-2xl border border-pink-100 bg-[#fff5f8] p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-pink-200/50">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-[#e60067]">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[#102849]">
                    {t("oneStopCenter.results.servicesTitle", { defaultValue: "Services Available at" })}{' '}
                    <span className="text-[#e60067]">{t("oneStopCenter.results.servicesTitlePink", { defaultValue: "One Stop Centers" })}</span>
                  </h3>
                </div>

                {/* Services List with Checkmarks */}
                <ul className="space-y-2.5 sm:space-y-3">
                  {oneStopCenterServices.map((service, idx) => {
                    const serviceKeys = [
                      "medical",
                      "police",
                      "legal",
                      "counseling",
                      "shelter",
                      "video",
                      "rehab",
                      "referral"
                    ]
                    const translatedService = serviceKeys[idx]
                      ? t(`oneStopCenter.results.services.${serviceKeys[idx]}`, { defaultValue: service })
                      : service

                    return (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-[#e60067] shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{translatedService}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default OneStopCenter
