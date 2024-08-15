# Discount module.

'''
To-do
- Allow for different discount rates.
'''

# Writing this as a function to allow for uses of different discount rates in the future.
def discount_rate():
    return 0.07
    
class RevenueStream:
    yearly_stream = [] # The revenue stream by year, with the first entry being the value at year 0.
    annual_value = 0 # Annual revenue stream (can be positive or negative) that is separate from the yearly_stream.
    end_value = 0 # Another annual revenue stream (can be positive or negative), but it only begins at the end of the sequence. Separate from the others.
    offset = 0 # The number of the first year.
    discount_rate = 0
    
    # For example, if yearly_stream == [5,10,15,20,25], annual_value == 3, end_value == 3, and offset == 10, then the undiscounted revenue stream is
    # 3 in all years before year 10, 8 in year 10, 13 in year 11, 18 in year 12, 23 in year 13, 28 in year 14, and 6 in all subsequent years.
    
    # To avoid a divide by 0 problem, annual_value and end_value are ignored if the discount rate is 0.
    
    def __init__(self, yearly_stream=[], annual_value=0, end_value=0, offset=0):
        self.yearly_stream = yearly_stream
        self.annual_value = annual_value
        self.end_value = end_value
        self.offset = offset
        self.discount_rate = discount_rate()
        
    # Given a revenue stream with an undiscounted value of val, spread over num_years, convert it into a revenue stream class.
    # num_years must be a positive integer.
    def spread_value(self, val, num_years):
        self.yearly_stream = [val/num_years for i in range(num_years)]
        return self
        
    def value(self):
        base_value = 0
        if self.discount_rate > 0:
            base_value = self.annual_value / self.discount_rate
            base_value += self.end_value / self.discount_rate * (1-self.discount_rate)**(self.offset+len(self.yearly_stream))
        return base_value + sum([self.yearly_stream[i] * (1-self.discount_rate)**(i+self.offset) for i in range(len(self.yearly_stream))])
        
    def annualize(self): # Get the NPV on an annual basis
        return self.value() * self.discount_rate
        
def npv_to_annual(val, dr = discount_rate()):
    return val*dr
    
# Test
#r = RevenueStream(yearly_stream = [5,10,15,20,25],annual_value = 3, end_value = 3, offset=10)
#print(r.value())