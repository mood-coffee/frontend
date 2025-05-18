/**
 * Centralized logging functionality
 * 
 * Bu modül, uygulama genelinde log kayıtlarını ve hata izlemeyi
 * merkezi bir noktadan yönetir. İleride Sentry, LogRocket gibi
 * servislerle entegre edilebilir.
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';
type LogContext = Record<string, unknown>;

interface LogOptions {
  context?: LogContext;
  tags?: string[];
}

interface LogEvent {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: LogContext;
  tags?: string[];
}

// Log kayıtlarının yapılandırması
const LOG_CONFIG = {
  // Geliştirme modunda konsola yazdırma
  printToConsole: process.env.NODE_ENV !== 'production',
  // Minimum log seviyesi
  minLevel: (process.env.NODE_ENV === 'production' ? 'info' : 'debug') as LogLevel,
  // Sentry gibi bir hata izleme servisi kullanma
  useErrorTracking: process.env.NODE_ENV === 'production'
};

// Log seviyelerinin önem sırası
const LOG_LEVEL_SEVERITY: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
};

/**
 * Genel log fonksiyonu
 */
function log(level: LogLevel, message: string, options: LogOptions = {}): void {
  // Minimum seviyeyi kontrol et
  if (LOG_LEVEL_SEVERITY[level] < LOG_LEVEL_SEVERITY[LOG_CONFIG.minLevel]) {
    return;
  }

  const event: LogEvent = {
    timestamp: new Date().toISOString(),
    level,
    message,
    context: options.context,
    tags: options.tags
  };

  // Konsola yazdırma (geliştirme modunda)
  if (LOG_CONFIG.printToConsole) {
    const { timestamp, level, message, context, tags } = event;
    
    const colorMap: Record<LogLevel, string> = {
      debug: '\x1b[36m', // Cyan
      info: '\x1b[32m',  // Green
      warn: '\x1b[33m',  // Yellow
      error: '\x1b[31m'  // Red
    };
    
    const reset = '\x1b[0m';
    const color = colorMap[level];
    
    console.log(
      `${color}[${level.toUpperCase()}]${reset} ${timestamp} - ${message}${
        tags ? ` [${tags.join(', ')}]` : ''
      }`
    );
    
    if (context) {
      console.log('Context:', context);
    }
  }

  // Üretim ortamında bir loglama servisine gönderilebilir
  if (LOG_CONFIG.useErrorTracking && level === 'error') {
    // Burada Sentry veya başka bir hata izleme servisine gönderilebilir
    // Örnek: Sentry.captureMessage(message, { level, extra: context, tags });
  }
}

/**
 * Debug seviyesinde log kaydı
 */
export function debug(message: string, options?: LogOptions): void {
  log('debug', message, options);
}

/**
 * Info seviyesinde log kaydı
 */
export function info(message: string, options?: LogOptions): void {
  log('info', message, options);
}

/**
 * Warn seviyesinde log kaydı
 */
export function warn(message: string, options?: LogOptions): void {
  log('warn', message, options);
}

/**
 * Error seviyesinde log kaydı
 */
export function error(message: string, error?: Error, options?: LogOptions): void {
  const context = { 
    ...(options?.context || {}),
    error: error ? {
      name: error.name,
      message: error.message,
      stack: error.stack
    } : undefined
  };
  
  log('error', message, { ...options, context });
}

// Create logger object before exporting as default
const logger = {
  debug,
  info,
  warn,
  error
};

export default logger; 