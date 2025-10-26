/**
 * Sanitizes database errors to prevent information leakage
 * Maps technical error codes to user-friendly messages
 */
export const sanitizeError = (error: any): string => {
  // Handle Supabase/Postgres error codes
  if (error?.code === '23505') {
    return 'This item already exists';
  }
  
  if (error?.code === '23503') {
    return 'Related item not found';
  }
  
  if (error?.code === '42501') {
    return 'You do not have permission to perform this action';
  }
  
  if (error?.code === '23502') {
    return 'Required information is missing';
  }
  
  // Handle common error messages without exposing technical details
  if (error?.message) {
    const msg = error.message.toLowerCase();
    
    if (msg.includes('permission') || msg.includes('policy')) {
      return 'You do not have permission to perform this action';
    }
    
    if (msg.includes('duplicate') || msg.includes('unique')) {
      return 'This item already exists';
    }
    
    if (msg.includes('not found') || msg.includes('does not exist')) {
      return 'The requested item was not found';
    }
    
    if (msg.includes('foreign key') || msg.includes('constraint')) {
      return 'Unable to complete operation due to dependencies';
    }
  }
  
  // Default safe message
  return 'An error occurred. Please try again.';
};
