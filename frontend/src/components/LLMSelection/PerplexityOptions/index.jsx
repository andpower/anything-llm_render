function LabelSelectInput({ label, name, required, className, children }) {
  return (
    <div className="flex flex-col w-60">
      <label className="text-white text-sm font-semibold block mb-4">
        {label}
      </label>
      <select
        name={name}
        required={required}
        className={className}
      >
        {children}
      </select>
    </div>
  );
}

// Usage
<LabelSelectInput
  label="Chat Model Selection"
  name="PerplexityModelPref"
  required={true}
  className="bg-zinc-900 border border-gray-500 text-white text-sm rounded-lg block w-full p-2.5"
>
  {customModels.length > 0 && (
    <optgroup label="Available Perplexity Models">
      {customModels.map((model) => {
        return (
          <option
            key={model.id}
            value={model.id}
            selected={settings?.PerplexityModelPref === model.id}
          >
            {model.id}
          </option>
        );
      })}
    </optgroup>
  )}
</LabelSelectInput>
  if (loading || customModels.length == 0) {
    return (
      <div className="flex flex-col w-60">
        <label className="text-white text-sm font-semibold block mb-4">
          Chat Model Selection
        </label>
        <select
          name="PerplexityModelPref"
          disabled={true}
          className="bg-zinc-900 border border-gray-500 text-white text-sm rounded-lg block w-full p-2.5"
        >
          <option disabled={true} selected={true}>
            -- loading available models --
          </option>
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-60">
      <label className="text-white text-sm font-semibold block mb-4">
        Chat Model Selection
      </label>
      <select
        name="PerplexityModelPref"
        required={true}
        className="bg-zinc-900 border border-gray-500 text-white text-sm rounded-lg block w-full p-2.5"
      >
        {customModels.length > 0 && (
          <optgroup label="Available Perplexity Models">
            {customModels.map((model) => {
              return (
                <option
                  key={model.id}
                  value={model.id}
                  selected={settings?.PerplexityModelPref === model.id}
                >
                  {model.id}
                </option>
              );
            })}
          </optgroup>
        )}
      </select>
    </div>
  );
}
