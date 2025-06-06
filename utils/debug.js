export const debugLog = (component, data, level = 'info') => {
  if (process.env.NODE_ENV === 'development') {
    console[level]([${component}]:, data);
  }
};

export const handleError = (error, component) => {
  debugLog(component, error, 'error');
};
