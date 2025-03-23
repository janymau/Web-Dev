def alarm_clock(day, vacation): return ('off' if day ==0 or day == 6 else '10:00') if vacation else '10:00' if day == 0 or day == 6 else '7:00' 
