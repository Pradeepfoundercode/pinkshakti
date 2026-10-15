import React, { useState, useMemo } from 'react'
import PageBanner from '../components/common/PageBanner'
import PhoneBanner from '../components/common/PhoneBanner'
import {
  oneStopCentersList,
  oneStopCenterDistricts,
  oneStopCenterCities,
  oneStopCenterServices,
} from '../constants'
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
} from 'lucide-react'

function OneStopCenter() {
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Filter centers based on selections
  const filteredCenters = useMemo(() => {
    return oneStopCentersList.filter((center) => {
      const matchDistrict = selectedDistrict
        ? center.district.toLowerCase() === selectedDistrict.toLowerCase()
        : true
      const matchCity = selectedCity
        ? center.city.toLowerCase() === selectedCity.toLowerCase()
        : true
      const matchQuery = searchQuery.trim()
        ? center.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
          center.address.toLowerCase().includes(searchQuery.trim().toLowerCase())
        : true
      return matchDistrict && matchCity && matchQuery
    })
  }, [selectedDistrict, selectedCity, searchQuery])

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

  return (
    <>
      <PageBanner
        alt="One Stop Centers - Pink Shakti"
        title={
          <>
            <span className="text-[#e60067]">One Stop</span>{' '}
            <span className="text-[#102849]">Centers</span>
          </>
        }
        description={
          <>
            <span className="block font-bold text-[#102849] text-sm sm:text-base lg:text-[1.1rem] mb-1.5 sm:mb-2">
              Support. Safety. Assistance. All in One Place.
            </span>
            <span>
              One Stop Centers (OSC) provide integrated support and assistance to women
              affected by violence, under one roof, including medical aid, police
              assistance, legal support, counseling and temporary shelter.
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
                  Find a <span className="text-[#e60067]">One Stop Center</span> Near You
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                  Search by district, city or center name to get location, contact details and services available.
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
                  District <span className="text-[#e60067]">*</span>
                </label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => {
                    setSelectedDistrict(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#102849] focus:border-[#e60067] focus:outline-none transition-all shadow-xs"
                >
                  <option value="">Select District</option>
                  {oneStopCenterDistricts.map((dist) => (
                    <option key={dist} value={dist}>
                      {dist}
                    </option>
                  ))}
                </select>
              </div>

              {/* City/Area Dropdown */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  City/Area <span className="text-[#e60067]">*</span>
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full rounded-xl border border-pink-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#102849] focus:border-[#e60067] focus:outline-none transition-all shadow-xs"
                >
                  <option value="">Select City/Area</option>
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
                  Center Name
                </label>
                <input
                  type="text"
                  placeholder="Enter center name"
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
                  <span>Search</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-pink-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-[#e60067] hover:text-[#e60067] active:scale-95 cursor-pointer"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Reset</span>
                </button>
              </div>
            </form>
          </div>

          {/* Results Layout: Left List + Right Services Box (Map removed as requested) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Centers List Column */}
            <div className="lg:col-span-8">
              {/* Count Title */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-[#102849]">
                  Total <span className="text-[#e60067]">{selectedDistrict || selectedCity || searchQuery ? totalItems : 75}</span> One Stop Centers in Uttar Pradesh
                </h3>
              </div>

              {/* Cards List */}
              {currentCenters.length > 0 ? (
                <div className="space-y-3.5 sm:space-y-4">
                  {currentCenters.map((center, index) => {
                    const centerNumber = startIndex + index + 1
                    return (
                      <div
                        key={center.id}
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
                                  {center.name}
                                </h4>
                                <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
                                  {center.status}
                                </span>
                              </div>

                              <p className="text-xs sm:text-sm text-gray-700 flex items-center gap-1.5 mb-1">
                                <MapPin className="h-3.5 w-3.5 text-[#e60067] shrink-0" />
                                <span className="font-medium text-gray-800">District:</span> {center.district}
                              </p>

                              <p className="text-xs text-gray-500 flex items-start gap-1.5">
                                <MapPin className="h-3.5 w-3.5 text-[#e60067] shrink-0 mt-0.5" />
                                <span className="line-clamp-2 leading-relaxed">{center.address}</span>
                              </p>
                            </div>
                          </div>

                          {/* Contact Info Column */}
                          <div className="w-full sm:w-auto shrink-0 space-y-1.5 text-xs text-gray-600 pt-2 sm:pt-0 border-t sm:border-t-0 border-pink-50">
                            <p className="flex items-center gap-1.5">
                              <Phone className="h-3.5 w-3.5 text-[#e60067] shrink-0" />
                              <span className="font-medium text-gray-700">{center.phone}</span>
                            </p>
                            <p className="flex items-center gap-1.5">
                              <Mail className="h-3.5 w-3.5 text-[#e60067] shrink-0" />
                              <span>{center.email}</span>
                            </p>
                            <p className="flex items-center gap-1.5 text-gray-500">
                              <Clock className="h-3.5 w-3.5 text-[#e60067] shrink-0" />
                              <span>{center.timing}</span>
                            </p>
                          </div>

                          {/* Action Button: View on Map ONLY (Clicking does not navigate anywhere), NO View Details button */}
                          <div className="w-full sm:w-auto flex sm:flex-col justify-end items-center shrink-0 pt-2 sm:pt-0">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault()
                              }}
                              className="w-full sm:w-auto rounded-xl border border-[#e60067] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#e60067] shadow-xs transition-all duration-200 hover:bg-pink-50 hover:shadow-sm active:scale-95 cursor-pointer text-center"
                            >
                              View on Map
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-pink-200 bg-[#fff7fa] p-8 text-center">
                  <p className="font-semibold text-gray-700 text-sm sm:text-base">
                    No centers found matching your filter criteria.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#e60067] hover:underline"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Reset all filters
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

                  {/* Page Numbers */}
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        currentPage === page
                          ? 'bg-[#e60067] text-white shadow-sm shadow-pink-500/20'
                          : 'border border-pink-200 bg-white text-gray-700 hover:border-[#e60067] hover:text-[#e60067]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  {totalPages > 5 && (
                    <>
                      <span className="px-1 text-gray-400 text-xs">...</span>
                      <button
                        type="button"
                        onClick={() => setCurrentPage(totalPages)}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          currentPage === totalPages
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
                  Showing {totalItems === 0 ? 0 : startIndex + 1} to{' '}
                  {Math.min(startIndex + itemsPerPage, totalItems)} of {selectedDistrict || selectedCity || searchQuery ? totalItems : 75} centers
                </p>
              </div>
            </div>

            {/* Right Column: Services Available at One Stop Centers (Map completely removed as requested) */}
            <div className="lg:col-span-4 mt-10 ">
              <div className="rounded-2xl border border-pink-100 bg-[#fff5f8] p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-pink-200/50">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-[#e60067]">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[#102849]">
                    Services Available at <span className="text-[#e60067]">One Stop Centers</span>
                  </h3>
                </div>

                {/* Services List with Checkmarks */}
                <ul className="space-y-2.5 sm:space-y-3">
                  {oneStopCenterServices.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-[#e60067] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Phone Banner */}
      <PhoneBanner />
    </>
  )
}

export default OneStopCenter
