import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    if (getCLS) getCLS(onPerfEntry);
    if (getFID) getFID(onPerfEntry);
    if (getFCP) getFCP(onPerfEntry);
    if (getLCP) getLCP(onPerfEntry);
    if (getTTFB) getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
