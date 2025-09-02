export const convertPrice = (currentPrice: number, oldPrice: number) => {
  return {
    current: currentPrice,
    old: oldPrice,
    discount() {
      if (!this.old || this.old <= 0) return '';
      const discount = ((this.old - this.current) / this.old) * 100;
      return Math.round(discount) + '%';
    },
  };
};
