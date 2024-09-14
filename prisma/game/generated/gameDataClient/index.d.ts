
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model agents
 * 
 */
export type agents = $Result.DefaultSelection<Prisma.$agentsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agents
 * const agents = await prisma.agents.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Agents
   * const agents = await prisma.agents.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.agents`: Exposes CRUD operations for the **agents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agents.findMany()
    * ```
    */
  get agents(): Prisma.agentsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    agents: 'agents'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "agents"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      agents: {
        payload: Prisma.$agentsPayload<ExtArgs>
        fields: Prisma.agentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>
          }
          findFirst: {
            args: Prisma.agentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>
          }
          findMany: {
            args: Prisma.agentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>[]
          }
          create: {
            args: Prisma.agentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>
          }
          createMany: {
            args: Prisma.agentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.agentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>
          }
          update: {
            args: Prisma.agentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>
          }
          deleteMany: {
            args: Prisma.agentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.agentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>
          }
          aggregate: {
            args: Prisma.AgentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgents>
          }
          groupBy: {
            args: Prisma.agentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.agentsCountArgs<ExtArgs>
            result: $Utils.Optional<AgentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model agents
   */

  export type AggregateAgents = {
    _count: AgentsCountAggregateOutputType | null
    _avg: AgentsAvgAggregateOutputType | null
    _sum: AgentsSumAggregateOutputType | null
    _min: AgentsMinAggregateOutputType | null
    _max: AgentsMaxAggregateOutputType | null
  }

  export type AgentsAvgAggregateOutputType = {
    agent_id: number | null
    attack: number | null
    defense: number | null
    speed: number | null
  }

  export type AgentsSumAggregateOutputType = {
    agent_id: number | null
    attack: number | null
    defense: number | null
    speed: number | null
  }

  export type AgentsMinAggregateOutputType = {
    agent_id: number | null
    agent_name: string | null
    attack: number | null
    defense: number | null
    speed: number | null
    position: string | null
  }

  export type AgentsMaxAggregateOutputType = {
    agent_id: number | null
    agent_name: string | null
    attack: number | null
    defense: number | null
    speed: number | null
    position: string | null
  }

  export type AgentsCountAggregateOutputType = {
    agent_id: number
    agent_name: number
    attack: number
    defense: number
    speed: number
    position: number
    _all: number
  }


  export type AgentsAvgAggregateInputType = {
    agent_id?: true
    attack?: true
    defense?: true
    speed?: true
  }

  export type AgentsSumAggregateInputType = {
    agent_id?: true
    attack?: true
    defense?: true
    speed?: true
  }

  export type AgentsMinAggregateInputType = {
    agent_id?: true
    agent_name?: true
    attack?: true
    defense?: true
    speed?: true
    position?: true
  }

  export type AgentsMaxAggregateInputType = {
    agent_id?: true
    agent_name?: true
    attack?: true
    defense?: true
    speed?: true
    position?: true
  }

  export type AgentsCountAggregateInputType = {
    agent_id?: true
    agent_name?: true
    attack?: true
    defense?: true
    speed?: true
    position?: true
    _all?: true
  }

  export type AgentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agents to aggregate.
     */
    where?: agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agents to fetch.
     */
    orderBy?: agentsOrderByWithRelationInput | agentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agents
    **/
    _count?: true | AgentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentsMaxAggregateInputType
  }

  export type GetAgentsAggregateType<T extends AgentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAgents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgents[P]>
      : GetScalarType<T[P], AggregateAgents[P]>
  }




  export type agentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agentsWhereInput
    orderBy?: agentsOrderByWithAggregationInput | agentsOrderByWithAggregationInput[]
    by: AgentsScalarFieldEnum[] | AgentsScalarFieldEnum
    having?: agentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentsCountAggregateInputType | true
    _avg?: AgentsAvgAggregateInputType
    _sum?: AgentsSumAggregateInputType
    _min?: AgentsMinAggregateInputType
    _max?: AgentsMaxAggregateInputType
  }

  export type AgentsGroupByOutputType = {
    agent_id: number
    agent_name: string
    attack: number
    defense: number
    speed: number
    position: string
    _count: AgentsCountAggregateOutputType | null
    _avg: AgentsAvgAggregateOutputType | null
    _sum: AgentsSumAggregateOutputType | null
    _min: AgentsMinAggregateOutputType | null
    _max: AgentsMaxAggregateOutputType | null
  }

  type GetAgentsGroupByPayload<T extends agentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentsGroupByOutputType[P]>
            : GetScalarType<T[P], AgentsGroupByOutputType[P]>
        }
      >
    >


  export type agentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    agent_id?: boolean
    agent_name?: boolean
    attack?: boolean
    defense?: boolean
    speed?: boolean
    position?: boolean
  }, ExtArgs["result"]["agents"]>


  export type agentsSelectScalar = {
    agent_id?: boolean
    agent_name?: boolean
    attack?: boolean
    defense?: boolean
    speed?: boolean
    position?: boolean
  }


  export type $agentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      agent_id: number
      agent_name: string
      attack: number
      defense: number
      speed: number
      position: string
    }, ExtArgs["result"]["agents"]>
    composites: {}
  }

  type agentsGetPayload<S extends boolean | null | undefined | agentsDefaultArgs> = $Result.GetResult<Prisma.$agentsPayload, S>

  type agentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<agentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AgentsCountAggregateInputType | true
    }

  export interface agentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agents'], meta: { name: 'agents' } }
    /**
     * Find zero or one Agents that matches the filter.
     * @param {agentsFindUniqueArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agentsFindUniqueArgs>(args: SelectSubset<T, agentsFindUniqueArgs<ExtArgs>>): Prisma__agentsClient<$Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Agents that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {agentsFindUniqueOrThrowArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agentsFindUniqueOrThrowArgs>(args: SelectSubset<T, agentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agentsClient<$Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentsFindFirstArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agentsFindFirstArgs>(args?: SelectSubset<T, agentsFindFirstArgs<ExtArgs>>): Prisma__agentsClient<$Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Agents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentsFindFirstOrThrowArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agentsFindFirstOrThrowArgs>(args?: SelectSubset<T, agentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__agentsClient<$Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agents.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agents.findMany({ take: 10 })
     * 
     * // Only select the `agent_id`
     * const agentsWithAgent_idOnly = await prisma.agents.findMany({ select: { agent_id: true } })
     * 
     */
    findMany<T extends agentsFindManyArgs>(args?: SelectSubset<T, agentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Agents.
     * @param {agentsCreateArgs} args - Arguments to create a Agents.
     * @example
     * // Create one Agents
     * const Agents = await prisma.agents.create({
     *   data: {
     *     // ... data to create a Agents
     *   }
     * })
     * 
     */
    create<T extends agentsCreateArgs>(args: SelectSubset<T, agentsCreateArgs<ExtArgs>>): Prisma__agentsClient<$Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Agents.
     * @param {agentsCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agents = await prisma.agents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agentsCreateManyArgs>(args?: SelectSubset<T, agentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agents.
     * @param {agentsDeleteArgs} args - Arguments to delete one Agents.
     * @example
     * // Delete one Agents
     * const Agents = await prisma.agents.delete({
     *   where: {
     *     // ... filter to delete one Agents
     *   }
     * })
     * 
     */
    delete<T extends agentsDeleteArgs>(args: SelectSubset<T, agentsDeleteArgs<ExtArgs>>): Prisma__agentsClient<$Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Agents.
     * @param {agentsUpdateArgs} args - Arguments to update one Agents.
     * @example
     * // Update one Agents
     * const agents = await prisma.agents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agentsUpdateArgs>(args: SelectSubset<T, agentsUpdateArgs<ExtArgs>>): Prisma__agentsClient<$Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Agents.
     * @param {agentsDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agentsDeleteManyArgs>(args?: SelectSubset<T, agentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agents = await prisma.agents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agentsUpdateManyArgs>(args: SelectSubset<T, agentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agents.
     * @param {agentsUpsertArgs} args - Arguments to update or create a Agents.
     * @example
     * // Update or create a Agents
     * const agents = await prisma.agents.upsert({
     *   create: {
     *     // ... data to create a Agents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agents we want to update
     *   }
     * })
     */
    upsert<T extends agentsUpsertArgs>(args: SelectSubset<T, agentsUpsertArgs<ExtArgs>>): Prisma__agentsClient<$Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentsCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agents.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends agentsCountArgs>(
      args?: Subset<T, agentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentsAggregateArgs>(args: Subset<T, AgentsAggregateArgs>): Prisma.PrismaPromise<GetAgentsAggregateType<T>>

    /**
     * Group by Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends agentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agentsGroupByArgs['orderBy'] }
        : { orderBy?: agentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, agentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agents model
   */
  readonly fields: agentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the agents model
   */ 
  interface agentsFieldRefs {
    readonly agent_id: FieldRef<"agents", 'Int'>
    readonly agent_name: FieldRef<"agents", 'String'>
    readonly attack: FieldRef<"agents", 'Int'>
    readonly defense: FieldRef<"agents", 'Int'>
    readonly speed: FieldRef<"agents", 'Int'>
    readonly position: FieldRef<"agents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * agents findUnique
   */
  export type agentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * Filter, which agents to fetch.
     */
    where: agentsWhereUniqueInput
  }

  /**
   * agents findUniqueOrThrow
   */
  export type agentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * Filter, which agents to fetch.
     */
    where: agentsWhereUniqueInput
  }

  /**
   * agents findFirst
   */
  export type agentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * Filter, which agents to fetch.
     */
    where?: agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agents to fetch.
     */
    orderBy?: agentsOrderByWithRelationInput | agentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agents.
     */
    cursor?: agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agents.
     */
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * agents findFirstOrThrow
   */
  export type agentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * Filter, which agents to fetch.
     */
    where?: agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agents to fetch.
     */
    orderBy?: agentsOrderByWithRelationInput | agentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agents.
     */
    cursor?: agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agents.
     */
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * agents findMany
   */
  export type agentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * Filter, which agents to fetch.
     */
    where?: agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agents to fetch.
     */
    orderBy?: agentsOrderByWithRelationInput | agentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agents.
     */
    cursor?: agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agents.
     */
    skip?: number
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * agents create
   */
  export type agentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * The data needed to create a agents.
     */
    data: XOR<agentsCreateInput, agentsUncheckedCreateInput>
  }

  /**
   * agents createMany
   */
  export type agentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agents.
     */
    data: agentsCreateManyInput | agentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agents update
   */
  export type agentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * The data needed to update a agents.
     */
    data: XOR<agentsUpdateInput, agentsUncheckedUpdateInput>
    /**
     * Choose, which agents to update.
     */
    where: agentsWhereUniqueInput
  }

  /**
   * agents updateMany
   */
  export type agentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agents.
     */
    data: XOR<agentsUpdateManyMutationInput, agentsUncheckedUpdateManyInput>
    /**
     * Filter which agents to update
     */
    where?: agentsWhereInput
  }

  /**
   * agents upsert
   */
  export type agentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * The filter to search for the agents to update in case it exists.
     */
    where: agentsWhereUniqueInput
    /**
     * In case the agents found by the `where` argument doesn't exist, create a new agents with this data.
     */
    create: XOR<agentsCreateInput, agentsUncheckedCreateInput>
    /**
     * In case the agents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agentsUpdateInput, agentsUncheckedUpdateInput>
  }

  /**
   * agents delete
   */
  export type agentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * Filter which agents to delete.
     */
    where: agentsWhereUniqueInput
  }

  /**
   * agents deleteMany
   */
  export type agentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agents to delete
     */
    where?: agentsWhereInput
  }

  /**
   * agents without action
   */
  export type agentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AgentsScalarFieldEnum: {
    agent_id: 'agent_id',
    agent_name: 'agent_name',
    attack: 'attack',
    defense: 'defense',
    speed: 'speed',
    position: 'position'
  };

  export type AgentsScalarFieldEnum = (typeof AgentsScalarFieldEnum)[keyof typeof AgentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type agentsWhereInput = {
    AND?: agentsWhereInput | agentsWhereInput[]
    OR?: agentsWhereInput[]
    NOT?: agentsWhereInput | agentsWhereInput[]
    agent_id?: IntFilter<"agents"> | number
    agent_name?: StringFilter<"agents"> | string
    attack?: IntFilter<"agents"> | number
    defense?: IntFilter<"agents"> | number
    speed?: IntFilter<"agents"> | number
    position?: StringFilter<"agents"> | string
  }

  export type agentsOrderByWithRelationInput = {
    agent_id?: SortOrder
    agent_name?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    speed?: SortOrder
    position?: SortOrder
  }

  export type agentsWhereUniqueInput = Prisma.AtLeast<{
    agent_id?: number
    agent_name?: string
    AND?: agentsWhereInput | agentsWhereInput[]
    OR?: agentsWhereInput[]
    NOT?: agentsWhereInput | agentsWhereInput[]
    attack?: IntFilter<"agents"> | number
    defense?: IntFilter<"agents"> | number
    speed?: IntFilter<"agents"> | number
    position?: StringFilter<"agents"> | string
  }, "agent_id" | "agent_name">

  export type agentsOrderByWithAggregationInput = {
    agent_id?: SortOrder
    agent_name?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    speed?: SortOrder
    position?: SortOrder
    _count?: agentsCountOrderByAggregateInput
    _avg?: agentsAvgOrderByAggregateInput
    _max?: agentsMaxOrderByAggregateInput
    _min?: agentsMinOrderByAggregateInput
    _sum?: agentsSumOrderByAggregateInput
  }

  export type agentsScalarWhereWithAggregatesInput = {
    AND?: agentsScalarWhereWithAggregatesInput | agentsScalarWhereWithAggregatesInput[]
    OR?: agentsScalarWhereWithAggregatesInput[]
    NOT?: agentsScalarWhereWithAggregatesInput | agentsScalarWhereWithAggregatesInput[]
    agent_id?: IntWithAggregatesFilter<"agents"> | number
    agent_name?: StringWithAggregatesFilter<"agents"> | string
    attack?: IntWithAggregatesFilter<"agents"> | number
    defense?: IntWithAggregatesFilter<"agents"> | number
    speed?: IntWithAggregatesFilter<"agents"> | number
    position?: StringWithAggregatesFilter<"agents"> | string
  }

  export type agentsCreateInput = {
    agent_id: number
    agent_name: string
    attack?: number
    defense?: number
    speed?: number
    position: string
  }

  export type agentsUncheckedCreateInput = {
    agent_id: number
    agent_name: string
    attack?: number
    defense?: number
    speed?: number
    position: string
  }

  export type agentsUpdateInput = {
    agent_id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
  }

  export type agentsUncheckedUpdateInput = {
    agent_id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
  }

  export type agentsCreateManyInput = {
    agent_id: number
    agent_name: string
    attack?: number
    defense?: number
    speed?: number
    position: string
  }

  export type agentsUpdateManyMutationInput = {
    agent_id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
  }

  export type agentsUncheckedUpdateManyInput = {
    agent_id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    attack?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type agentsCountOrderByAggregateInput = {
    agent_id?: SortOrder
    agent_name?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    speed?: SortOrder
    position?: SortOrder
  }

  export type agentsAvgOrderByAggregateInput = {
    agent_id?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    speed?: SortOrder
  }

  export type agentsMaxOrderByAggregateInput = {
    agent_id?: SortOrder
    agent_name?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    speed?: SortOrder
    position?: SortOrder
  }

  export type agentsMinOrderByAggregateInput = {
    agent_id?: SortOrder
    agent_name?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    speed?: SortOrder
    position?: SortOrder
  }

  export type agentsSumOrderByAggregateInput = {
    agent_id?: SortOrder
    attack?: SortOrder
    defense?: SortOrder
    speed?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use agentsDefaultArgs instead
     */
    export type agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = agentsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}