def string_splosion(str):
  return (''.join( str[i]+str[:i+1] if i != len(str)-1 else str[i] for i in range( len(str)-1) ) )