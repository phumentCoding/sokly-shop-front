const Specification = ({items}) => {
    return (
        <div>
            {/* Specifications Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-wide">SPECIFICATION</h2>
            <div className="space-y-4 s">
              {items.map((spec, index) => (
                <div key={index} className="flex flex-wrap items-start gap-2">
                  {spec.label && <span className="font-semibold text-gray-900">{spec.label}</span>}
                  <span className="text-gray-700 leading-relaxed">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
    )
}

export default Specification;