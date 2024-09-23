
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model my_agents
 * 
 */
export type my_agents = $Result.DefaultSelection<Prisma.$my_agentsPayload>
/**
 * Model team_members
 * 
 */
export type team_members = $Result.DefaultSelection<Prisma.$team_membersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.my_agents`: Exposes CRUD operations for the **my_agents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more My_agents
    * const my_agents = await prisma.my_agents.findMany()
    * ```
    */
  get my_agents(): Prisma.my_agentsDelegate<ExtArgs>;

  /**
   * `prisma.team_members`: Exposes CRUD operations for the **team_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Team_members
    * const team_members = await prisma.team_members.findMany()
    * ```
    */
  get team_members(): Prisma.team_membersDelegate<ExtArgs>;
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
    users: 'users',
    my_agents: 'my_agents',
    team_members: 'team_members'
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
      modelProps: "users" | "my_agents" | "team_members"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      my_agents: {
        payload: Prisma.$my_agentsPayload<ExtArgs>
        fields: Prisma.my_agentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.my_agentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$my_agentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.my_agentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$my_agentsPayload>
          }
          findFirst: {
            args: Prisma.my_agentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$my_agentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.my_agentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$my_agentsPayload>
          }
          findMany: {
            args: Prisma.my_agentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$my_agentsPayload>[]
          }
          create: {
            args: Prisma.my_agentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$my_agentsPayload>
          }
          createMany: {
            args: Prisma.my_agentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.my_agentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$my_agentsPayload>
          }
          update: {
            args: Prisma.my_agentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$my_agentsPayload>
          }
          deleteMany: {
            args: Prisma.my_agentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.my_agentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.my_agentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$my_agentsPayload>
          }
          aggregate: {
            args: Prisma.My_agentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMy_agents>
          }
          groupBy: {
            args: Prisma.my_agentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<My_agentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.my_agentsCountArgs<ExtArgs>
            result: $Utils.Optional<My_agentsCountAggregateOutputType> | number
          }
        }
      }
      team_members: {
        payload: Prisma.$team_membersPayload<ExtArgs>
        fields: Prisma.team_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.team_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.team_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>
          }
          findFirst: {
            args: Prisma.team_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.team_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>
          }
          findMany: {
            args: Prisma.team_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>[]
          }
          create: {
            args: Prisma.team_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>
          }
          createMany: {
            args: Prisma.team_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.team_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>
          }
          update: {
            args: Prisma.team_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>
          }
          deleteMany: {
            args: Prisma.team_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.team_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.team_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>
          }
          aggregate: {
            args: Prisma.Team_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam_members>
          }
          groupBy: {
            args: Prisma.team_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Team_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.team_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Team_membersCountAggregateOutputType> | number
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    team_members: number
    my_agents: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_members?: boolean | UsersCountOutputTypeCountTeam_membersArgs
    my_agents?: boolean | UsersCountOutputTypeCountMy_agentsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTeam_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_membersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMy_agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: my_agentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    cash: number | null
    matches: number | null
    win: number | null
    lost: number | null
  }

  export type UsersSumAggregateOutputType = {
    cash: number | null
    matches: number | null
    win: number | null
    lost: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    password: string | null
    nickname: string | null
    cash: number | null
    matches: number | null
    win: number | null
    lost: number | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    password: string | null
    nickname: string | null
    cash: number | null
    matches: number | null
    win: number | null
    lost: number | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    password: number
    nickname: number
    cash: number
    matches: number
    win: number
    lost: number
    createdAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    cash?: true
    matches?: true
    win?: true
    lost?: true
  }

  export type UsersSumAggregateInputType = {
    cash?: true
    matches?: true
    win?: true
    lost?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    password?: true
    nickname?: true
    cash?: true
    matches?: true
    win?: true
    lost?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    password?: true
    nickname?: true
    cash?: true
    matches?: true
    win?: true
    lost?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    password?: true
    nickname?: true
    cash?: true
    matches?: true
    win?: true
    lost?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: string
    password: string
    nickname: string
    cash: number
    matches: number
    win: number
    lost: number
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    password?: boolean
    nickname?: boolean
    cash?: boolean
    matches?: boolean
    win?: boolean
    lost?: boolean
    createdAt?: boolean
    team_members?: boolean | users$team_membersArgs<ExtArgs>
    my_agents?: boolean | users$my_agentsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>


  export type usersSelectScalar = {
    user_id?: boolean
    password?: boolean
    nickname?: boolean
    cash?: boolean
    matches?: boolean
    win?: boolean
    lost?: boolean
    createdAt?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_members?: boolean | users$team_membersArgs<ExtArgs>
    my_agents?: boolean | users$my_agentsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      team_members: Prisma.$team_membersPayload<ExtArgs>[]
      my_agents: Prisma.$my_agentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      password: string
      nickname: string
      cash: number
      matches: number
      win: number
      lost: number
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team_members<T extends users$team_membersArgs<ExtArgs> = {}>(args?: Subset<T, users$team_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findMany"> | Null>
    my_agents<T extends users$my_agentsArgs<ExtArgs> = {}>(args?: Subset<T, users$my_agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$my_agentsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly nickname: FieldRef<"users", 'String'>
    readonly cash: FieldRef<"users", 'Int'>
    readonly matches: FieldRef<"users", 'Int'>
    readonly win: FieldRef<"users", 'Int'>
    readonly lost: FieldRef<"users", 'Int'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.team_members
   */
  export type users$team_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    where?: team_membersWhereInput
    orderBy?: team_membersOrderByWithRelationInput | team_membersOrderByWithRelationInput[]
    cursor?: team_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_membersScalarFieldEnum | Team_membersScalarFieldEnum[]
  }

  /**
   * users.my_agents
   */
  export type users$my_agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the my_agents
     */
    select?: my_agentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: my_agentsInclude<ExtArgs> | null
    where?: my_agentsWhereInput
    orderBy?: my_agentsOrderByWithRelationInput | my_agentsOrderByWithRelationInput[]
    cursor?: my_agentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: My_agentsScalarFieldEnum | My_agentsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model my_agents
   */

  export type AggregateMy_agents = {
    _count: My_agentsCountAggregateOutputType | null
    _avg: My_agentsAvgAggregateOutputType | null
    _sum: My_agentsSumAggregateOutputType | null
    _min: My_agentsMinAggregateOutputType | null
    _max: My_agentsMaxAggregateOutputType | null
  }

  export type My_agentsAvgAggregateOutputType = {
    my_agent_id: number | null
    agent_id: number | null
    count: number | null
  }

  export type My_agentsSumAggregateOutputType = {
    my_agent_id: number | null
    agent_id: number | null
    count: number | null
  }

  export type My_agentsMinAggregateOutputType = {
    my_agent_id: number | null
    agent_id: number | null
    user_id: string | null
    agent_name: string | null
    count: number | null
    createdAt: Date | null
  }

  export type My_agentsMaxAggregateOutputType = {
    my_agent_id: number | null
    agent_id: number | null
    user_id: string | null
    agent_name: string | null
    count: number | null
    createdAt: Date | null
  }

  export type My_agentsCountAggregateOutputType = {
    my_agent_id: number
    agent_id: number
    user_id: number
    agent_name: number
    count: number
    createdAt: number
    _all: number
  }


  export type My_agentsAvgAggregateInputType = {
    my_agent_id?: true
    agent_id?: true
    count?: true
  }

  export type My_agentsSumAggregateInputType = {
    my_agent_id?: true
    agent_id?: true
    count?: true
  }

  export type My_agentsMinAggregateInputType = {
    my_agent_id?: true
    agent_id?: true
    user_id?: true
    agent_name?: true
    count?: true
    createdAt?: true
  }

  export type My_agentsMaxAggregateInputType = {
    my_agent_id?: true
    agent_id?: true
    user_id?: true
    agent_name?: true
    count?: true
    createdAt?: true
  }

  export type My_agentsCountAggregateInputType = {
    my_agent_id?: true
    agent_id?: true
    user_id?: true
    agent_name?: true
    count?: true
    createdAt?: true
    _all?: true
  }

  export type My_agentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which my_agents to aggregate.
     */
    where?: my_agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of my_agents to fetch.
     */
    orderBy?: my_agentsOrderByWithRelationInput | my_agentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: my_agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` my_agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` my_agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned my_agents
    **/
    _count?: true | My_agentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: My_agentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: My_agentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: My_agentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: My_agentsMaxAggregateInputType
  }

  export type GetMy_agentsAggregateType<T extends My_agentsAggregateArgs> = {
        [P in keyof T & keyof AggregateMy_agents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMy_agents[P]>
      : GetScalarType<T[P], AggregateMy_agents[P]>
  }




  export type my_agentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: my_agentsWhereInput
    orderBy?: my_agentsOrderByWithAggregationInput | my_agentsOrderByWithAggregationInput[]
    by: My_agentsScalarFieldEnum[] | My_agentsScalarFieldEnum
    having?: my_agentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: My_agentsCountAggregateInputType | true
    _avg?: My_agentsAvgAggregateInputType
    _sum?: My_agentsSumAggregateInputType
    _min?: My_agentsMinAggregateInputType
    _max?: My_agentsMaxAggregateInputType
  }

  export type My_agentsGroupByOutputType = {
    my_agent_id: number
    agent_id: number
    user_id: string
    agent_name: string
    count: number
    createdAt: Date
    _count: My_agentsCountAggregateOutputType | null
    _avg: My_agentsAvgAggregateOutputType | null
    _sum: My_agentsSumAggregateOutputType | null
    _min: My_agentsMinAggregateOutputType | null
    _max: My_agentsMaxAggregateOutputType | null
  }

  type GetMy_agentsGroupByPayload<T extends my_agentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<My_agentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof My_agentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], My_agentsGroupByOutputType[P]>
            : GetScalarType<T[P], My_agentsGroupByOutputType[P]>
        }
      >
    >


  export type my_agentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    my_agent_id?: boolean
    agent_id?: boolean
    user_id?: boolean
    agent_name?: boolean
    count?: boolean
    createdAt?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["my_agents"]>


  export type my_agentsSelectScalar = {
    my_agent_id?: boolean
    agent_id?: boolean
    user_id?: boolean
    agent_name?: boolean
    count?: boolean
    createdAt?: boolean
  }

  export type my_agentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $my_agentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "my_agents"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      my_agent_id: number
      agent_id: number
      user_id: string
      agent_name: string
      count: number
      createdAt: Date
    }, ExtArgs["result"]["my_agents"]>
    composites: {}
  }

  type my_agentsGetPayload<S extends boolean | null | undefined | my_agentsDefaultArgs> = $Result.GetResult<Prisma.$my_agentsPayload, S>

  type my_agentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<my_agentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: My_agentsCountAggregateInputType | true
    }

  export interface my_agentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['my_agents'], meta: { name: 'my_agents' } }
    /**
     * Find zero or one My_agents that matches the filter.
     * @param {my_agentsFindUniqueArgs} args - Arguments to find a My_agents
     * @example
     * // Get one My_agents
     * const my_agents = await prisma.my_agents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends my_agentsFindUniqueArgs>(args: SelectSubset<T, my_agentsFindUniqueArgs<ExtArgs>>): Prisma__my_agentsClient<$Result.GetResult<Prisma.$my_agentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one My_agents that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {my_agentsFindUniqueOrThrowArgs} args - Arguments to find a My_agents
     * @example
     * // Get one My_agents
     * const my_agents = await prisma.my_agents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends my_agentsFindUniqueOrThrowArgs>(args: SelectSubset<T, my_agentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__my_agentsClient<$Result.GetResult<Prisma.$my_agentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first My_agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {my_agentsFindFirstArgs} args - Arguments to find a My_agents
     * @example
     * // Get one My_agents
     * const my_agents = await prisma.my_agents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends my_agentsFindFirstArgs>(args?: SelectSubset<T, my_agentsFindFirstArgs<ExtArgs>>): Prisma__my_agentsClient<$Result.GetResult<Prisma.$my_agentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first My_agents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {my_agentsFindFirstOrThrowArgs} args - Arguments to find a My_agents
     * @example
     * // Get one My_agents
     * const my_agents = await prisma.my_agents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends my_agentsFindFirstOrThrowArgs>(args?: SelectSubset<T, my_agentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__my_agentsClient<$Result.GetResult<Prisma.$my_agentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more My_agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {my_agentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all My_agents
     * const my_agents = await prisma.my_agents.findMany()
     * 
     * // Get first 10 My_agents
     * const my_agents = await prisma.my_agents.findMany({ take: 10 })
     * 
     * // Only select the `my_agent_id`
     * const my_agentsWithMy_agent_idOnly = await prisma.my_agents.findMany({ select: { my_agent_id: true } })
     * 
     */
    findMany<T extends my_agentsFindManyArgs>(args?: SelectSubset<T, my_agentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$my_agentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a My_agents.
     * @param {my_agentsCreateArgs} args - Arguments to create a My_agents.
     * @example
     * // Create one My_agents
     * const My_agents = await prisma.my_agents.create({
     *   data: {
     *     // ... data to create a My_agents
     *   }
     * })
     * 
     */
    create<T extends my_agentsCreateArgs>(args: SelectSubset<T, my_agentsCreateArgs<ExtArgs>>): Prisma__my_agentsClient<$Result.GetResult<Prisma.$my_agentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many My_agents.
     * @param {my_agentsCreateManyArgs} args - Arguments to create many My_agents.
     * @example
     * // Create many My_agents
     * const my_agents = await prisma.my_agents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends my_agentsCreateManyArgs>(args?: SelectSubset<T, my_agentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a My_agents.
     * @param {my_agentsDeleteArgs} args - Arguments to delete one My_agents.
     * @example
     * // Delete one My_agents
     * const My_agents = await prisma.my_agents.delete({
     *   where: {
     *     // ... filter to delete one My_agents
     *   }
     * })
     * 
     */
    delete<T extends my_agentsDeleteArgs>(args: SelectSubset<T, my_agentsDeleteArgs<ExtArgs>>): Prisma__my_agentsClient<$Result.GetResult<Prisma.$my_agentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one My_agents.
     * @param {my_agentsUpdateArgs} args - Arguments to update one My_agents.
     * @example
     * // Update one My_agents
     * const my_agents = await prisma.my_agents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends my_agentsUpdateArgs>(args: SelectSubset<T, my_agentsUpdateArgs<ExtArgs>>): Prisma__my_agentsClient<$Result.GetResult<Prisma.$my_agentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more My_agents.
     * @param {my_agentsDeleteManyArgs} args - Arguments to filter My_agents to delete.
     * @example
     * // Delete a few My_agents
     * const { count } = await prisma.my_agents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends my_agentsDeleteManyArgs>(args?: SelectSubset<T, my_agentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more My_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {my_agentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many My_agents
     * const my_agents = await prisma.my_agents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends my_agentsUpdateManyArgs>(args: SelectSubset<T, my_agentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one My_agents.
     * @param {my_agentsUpsertArgs} args - Arguments to update or create a My_agents.
     * @example
     * // Update or create a My_agents
     * const my_agents = await prisma.my_agents.upsert({
     *   create: {
     *     // ... data to create a My_agents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the My_agents we want to update
     *   }
     * })
     */
    upsert<T extends my_agentsUpsertArgs>(args: SelectSubset<T, my_agentsUpsertArgs<ExtArgs>>): Prisma__my_agentsClient<$Result.GetResult<Prisma.$my_agentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of My_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {my_agentsCountArgs} args - Arguments to filter My_agents to count.
     * @example
     * // Count the number of My_agents
     * const count = await prisma.my_agents.count({
     *   where: {
     *     // ... the filter for the My_agents we want to count
     *   }
     * })
    **/
    count<T extends my_agentsCountArgs>(
      args?: Subset<T, my_agentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], My_agentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a My_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_agentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends My_agentsAggregateArgs>(args: Subset<T, My_agentsAggregateArgs>): Prisma.PrismaPromise<GetMy_agentsAggregateType<T>>

    /**
     * Group by My_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {my_agentsGroupByArgs} args - Group by arguments.
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
      T extends my_agentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: my_agentsGroupByArgs['orderBy'] }
        : { orderBy?: my_agentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, my_agentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMy_agentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the my_agents model
   */
  readonly fields: my_agentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for my_agents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__my_agentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the my_agents model
   */ 
  interface my_agentsFieldRefs {
    readonly my_agent_id: FieldRef<"my_agents", 'Int'>
    readonly agent_id: FieldRef<"my_agents", 'Int'>
    readonly user_id: FieldRef<"my_agents", 'String'>
    readonly agent_name: FieldRef<"my_agents", 'String'>
    readonly count: FieldRef<"my_agents", 'Int'>
    readonly createdAt: FieldRef<"my_agents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * my_agents findUnique
   */
  export type my_agentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the my_agents
     */
    select?: my_agentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: my_agentsInclude<ExtArgs> | null
    /**
     * Filter, which my_agents to fetch.
     */
    where: my_agentsWhereUniqueInput
  }

  /**
   * my_agents findUniqueOrThrow
   */
  export type my_agentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the my_agents
     */
    select?: my_agentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: my_agentsInclude<ExtArgs> | null
    /**
     * Filter, which my_agents to fetch.
     */
    where: my_agentsWhereUniqueInput
  }

  /**
   * my_agents findFirst
   */
  export type my_agentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the my_agents
     */
    select?: my_agentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: my_agentsInclude<ExtArgs> | null
    /**
     * Filter, which my_agents to fetch.
     */
    where?: my_agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of my_agents to fetch.
     */
    orderBy?: my_agentsOrderByWithRelationInput | my_agentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for my_agents.
     */
    cursor?: my_agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` my_agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` my_agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of my_agents.
     */
    distinct?: My_agentsScalarFieldEnum | My_agentsScalarFieldEnum[]
  }

  /**
   * my_agents findFirstOrThrow
   */
  export type my_agentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the my_agents
     */
    select?: my_agentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: my_agentsInclude<ExtArgs> | null
    /**
     * Filter, which my_agents to fetch.
     */
    where?: my_agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of my_agents to fetch.
     */
    orderBy?: my_agentsOrderByWithRelationInput | my_agentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for my_agents.
     */
    cursor?: my_agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` my_agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` my_agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of my_agents.
     */
    distinct?: My_agentsScalarFieldEnum | My_agentsScalarFieldEnum[]
  }

  /**
   * my_agents findMany
   */
  export type my_agentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the my_agents
     */
    select?: my_agentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: my_agentsInclude<ExtArgs> | null
    /**
     * Filter, which my_agents to fetch.
     */
    where?: my_agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of my_agents to fetch.
     */
    orderBy?: my_agentsOrderByWithRelationInput | my_agentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing my_agents.
     */
    cursor?: my_agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` my_agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` my_agents.
     */
    skip?: number
    distinct?: My_agentsScalarFieldEnum | My_agentsScalarFieldEnum[]
  }

  /**
   * my_agents create
   */
  export type my_agentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the my_agents
     */
    select?: my_agentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: my_agentsInclude<ExtArgs> | null
    /**
     * The data needed to create a my_agents.
     */
    data: XOR<my_agentsCreateInput, my_agentsUncheckedCreateInput>
  }

  /**
   * my_agents createMany
   */
  export type my_agentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many my_agents.
     */
    data: my_agentsCreateManyInput | my_agentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * my_agents update
   */
  export type my_agentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the my_agents
     */
    select?: my_agentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: my_agentsInclude<ExtArgs> | null
    /**
     * The data needed to update a my_agents.
     */
    data: XOR<my_agentsUpdateInput, my_agentsUncheckedUpdateInput>
    /**
     * Choose, which my_agents to update.
     */
    where: my_agentsWhereUniqueInput
  }

  /**
   * my_agents updateMany
   */
  export type my_agentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update my_agents.
     */
    data: XOR<my_agentsUpdateManyMutationInput, my_agentsUncheckedUpdateManyInput>
    /**
     * Filter which my_agents to update
     */
    where?: my_agentsWhereInput
  }

  /**
   * my_agents upsert
   */
  export type my_agentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the my_agents
     */
    select?: my_agentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: my_agentsInclude<ExtArgs> | null
    /**
     * The filter to search for the my_agents to update in case it exists.
     */
    where: my_agentsWhereUniqueInput
    /**
     * In case the my_agents found by the `where` argument doesn't exist, create a new my_agents with this data.
     */
    create: XOR<my_agentsCreateInput, my_agentsUncheckedCreateInput>
    /**
     * In case the my_agents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<my_agentsUpdateInput, my_agentsUncheckedUpdateInput>
  }

  /**
   * my_agents delete
   */
  export type my_agentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the my_agents
     */
    select?: my_agentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: my_agentsInclude<ExtArgs> | null
    /**
     * Filter which my_agents to delete.
     */
    where: my_agentsWhereUniqueInput
  }

  /**
   * my_agents deleteMany
   */
  export type my_agentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which my_agents to delete
     */
    where?: my_agentsWhereInput
  }

  /**
   * my_agents without action
   */
  export type my_agentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the my_agents
     */
    select?: my_agentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: my_agentsInclude<ExtArgs> | null
  }


  /**
   * Model team_members
   */

  export type AggregateTeam_members = {
    _count: Team_membersCountAggregateOutputType | null
    _avg: Team_membersAvgAggregateOutputType | null
    _sum: Team_membersSumAggregateOutputType | null
    _min: Team_membersMinAggregateOutputType | null
    _max: Team_membersMaxAggregateOutputType | null
  }

  export type Team_membersAvgAggregateOutputType = {
    team_id: number | null
  }

  export type Team_membersSumAggregateOutputType = {
    team_id: number | null
  }

  export type Team_membersMinAggregateOutputType = {
    team_id: number | null
    user_id: string | null
    team_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Team_membersMaxAggregateOutputType = {
    team_id: number | null
    user_id: string | null
    team_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Team_membersCountAggregateOutputType = {
    team_id: number
    user_id: number
    agent_ids: number
    team_name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Team_membersAvgAggregateInputType = {
    team_id?: true
  }

  export type Team_membersSumAggregateInputType = {
    team_id?: true
  }

  export type Team_membersMinAggregateInputType = {
    team_id?: true
    user_id?: true
    team_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Team_membersMaxAggregateInputType = {
    team_id?: true
    user_id?: true
    team_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Team_membersCountAggregateInputType = {
    team_id?: true
    user_id?: true
    agent_ids?: true
    team_name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Team_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_members to aggregate.
     */
    where?: team_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_membersOrderByWithRelationInput | team_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: team_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned team_members
    **/
    _count?: true | Team_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Team_membersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Team_membersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Team_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Team_membersMaxAggregateInputType
  }

  export type GetTeam_membersAggregateType<T extends Team_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_members[P]>
      : GetScalarType<T[P], AggregateTeam_members[P]>
  }




  export type team_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_membersWhereInput
    orderBy?: team_membersOrderByWithAggregationInput | team_membersOrderByWithAggregationInput[]
    by: Team_membersScalarFieldEnum[] | Team_membersScalarFieldEnum
    having?: team_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Team_membersCountAggregateInputType | true
    _avg?: Team_membersAvgAggregateInputType
    _sum?: Team_membersSumAggregateInputType
    _min?: Team_membersMinAggregateInputType
    _max?: Team_membersMaxAggregateInputType
  }

  export type Team_membersGroupByOutputType = {
    team_id: number
    user_id: string
    agent_ids: JsonValue
    team_name: string
    createdAt: Date
    updatedAt: Date
    _count: Team_membersCountAggregateOutputType | null
    _avg: Team_membersAvgAggregateOutputType | null
    _sum: Team_membersSumAggregateOutputType | null
    _min: Team_membersMinAggregateOutputType | null
    _max: Team_membersMaxAggregateOutputType | null
  }

  type GetTeam_membersGroupByPayload<T extends team_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Team_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Team_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Team_membersGroupByOutputType[P]>
        }
      >
    >


  export type team_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    user_id?: boolean
    agent_ids?: boolean
    team_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_members"]>


  export type team_membersSelectScalar = {
    team_id?: boolean
    user_id?: boolean
    agent_ids?: boolean
    team_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type team_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $team_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "team_members"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      team_id: number
      user_id: string
      agent_ids: Prisma.JsonValue
      team_name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team_members"]>
    composites: {}
  }

  type team_membersGetPayload<S extends boolean | null | undefined | team_membersDefaultArgs> = $Result.GetResult<Prisma.$team_membersPayload, S>

  type team_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<team_membersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Team_membersCountAggregateInputType | true
    }

  export interface team_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team_members'], meta: { name: 'team_members' } }
    /**
     * Find zero or one Team_members that matches the filter.
     * @param {team_membersFindUniqueArgs} args - Arguments to find a Team_members
     * @example
     * // Get one Team_members
     * const team_members = await prisma.team_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends team_membersFindUniqueArgs>(args: SelectSubset<T, team_membersFindUniqueArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Team_members that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {team_membersFindUniqueOrThrowArgs} args - Arguments to find a Team_members
     * @example
     * // Get one Team_members
     * const team_members = await prisma.team_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends team_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, team_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Team_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_membersFindFirstArgs} args - Arguments to find a Team_members
     * @example
     * // Get one Team_members
     * const team_members = await prisma.team_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends team_membersFindFirstArgs>(args?: SelectSubset<T, team_membersFindFirstArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Team_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_membersFindFirstOrThrowArgs} args - Arguments to find a Team_members
     * @example
     * // Get one Team_members
     * const team_members = await prisma.team_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends team_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, team_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Team_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_members
     * const team_members = await prisma.team_members.findMany()
     * 
     * // Get first 10 Team_members
     * const team_members = await prisma.team_members.findMany({ take: 10 })
     * 
     * // Only select the `team_id`
     * const team_membersWithTeam_idOnly = await prisma.team_members.findMany({ select: { team_id: true } })
     * 
     */
    findMany<T extends team_membersFindManyArgs>(args?: SelectSubset<T, team_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Team_members.
     * @param {team_membersCreateArgs} args - Arguments to create a Team_members.
     * @example
     * // Create one Team_members
     * const Team_members = await prisma.team_members.create({
     *   data: {
     *     // ... data to create a Team_members
     *   }
     * })
     * 
     */
    create<T extends team_membersCreateArgs>(args: SelectSubset<T, team_membersCreateArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Team_members.
     * @param {team_membersCreateManyArgs} args - Arguments to create many Team_members.
     * @example
     * // Create many Team_members
     * const team_members = await prisma.team_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends team_membersCreateManyArgs>(args?: SelectSubset<T, team_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team_members.
     * @param {team_membersDeleteArgs} args - Arguments to delete one Team_members.
     * @example
     * // Delete one Team_members
     * const Team_members = await prisma.team_members.delete({
     *   where: {
     *     // ... filter to delete one Team_members
     *   }
     * })
     * 
     */
    delete<T extends team_membersDeleteArgs>(args: SelectSubset<T, team_membersDeleteArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Team_members.
     * @param {team_membersUpdateArgs} args - Arguments to update one Team_members.
     * @example
     * // Update one Team_members
     * const team_members = await prisma.team_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends team_membersUpdateArgs>(args: SelectSubset<T, team_membersUpdateArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Team_members.
     * @param {team_membersDeleteManyArgs} args - Arguments to filter Team_members to delete.
     * @example
     * // Delete a few Team_members
     * const { count } = await prisma.team_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends team_membersDeleteManyArgs>(args?: SelectSubset<T, team_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_members
     * const team_members = await prisma.team_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends team_membersUpdateManyArgs>(args: SelectSubset<T, team_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team_members.
     * @param {team_membersUpsertArgs} args - Arguments to update or create a Team_members.
     * @example
     * // Update or create a Team_members
     * const team_members = await prisma.team_members.upsert({
     *   create: {
     *     // ... data to create a Team_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_members we want to update
     *   }
     * })
     */
    upsert<T extends team_membersUpsertArgs>(args: SelectSubset<T, team_membersUpsertArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_membersCountArgs} args - Arguments to filter Team_members to count.
     * @example
     * // Count the number of Team_members
     * const count = await prisma.team_members.count({
     *   where: {
     *     // ... the filter for the Team_members we want to count
     *   }
     * })
    **/
    count<T extends team_membersCountArgs>(
      args?: Subset<T, team_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Team_membersAggregateArgs>(args: Subset<T, Team_membersAggregateArgs>): Prisma.PrismaPromise<GetTeam_membersAggregateType<T>>

    /**
     * Group by Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_membersGroupByArgs} args - Group by arguments.
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
      T extends team_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: team_membersGroupByArgs['orderBy'] }
        : { orderBy?: team_membersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, team_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeam_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the team_members model
   */
  readonly fields: team_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__team_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the team_members model
   */ 
  interface team_membersFieldRefs {
    readonly team_id: FieldRef<"team_members", 'Int'>
    readonly user_id: FieldRef<"team_members", 'String'>
    readonly agent_ids: FieldRef<"team_members", 'Json'>
    readonly team_name: FieldRef<"team_members", 'String'>
    readonly createdAt: FieldRef<"team_members", 'DateTime'>
    readonly updatedAt: FieldRef<"team_members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * team_members findUnique
   */
  export type team_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * Filter, which team_members to fetch.
     */
    where: team_membersWhereUniqueInput
  }

  /**
   * team_members findUniqueOrThrow
   */
  export type team_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * Filter, which team_members to fetch.
     */
    where: team_membersWhereUniqueInput
  }

  /**
   * team_members findFirst
   */
  export type team_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_membersOrderByWithRelationInput | team_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for team_members.
     */
    cursor?: team_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_membersScalarFieldEnum | Team_membersScalarFieldEnum[]
  }

  /**
   * team_members findFirstOrThrow
   */
  export type team_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_membersOrderByWithRelationInput | team_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for team_members.
     */
    cursor?: team_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_membersScalarFieldEnum | Team_membersScalarFieldEnum[]
  }

  /**
   * team_members findMany
   */
  export type team_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_membersOrderByWithRelationInput | team_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing team_members.
     */
    cursor?: team_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_members.
     */
    skip?: number
    distinct?: Team_membersScalarFieldEnum | Team_membersScalarFieldEnum[]
  }

  /**
   * team_members create
   */
  export type team_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a team_members.
     */
    data: XOR<team_membersCreateInput, team_membersUncheckedCreateInput>
  }

  /**
   * team_members createMany
   */
  export type team_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many team_members.
     */
    data: team_membersCreateManyInput | team_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team_members update
   */
  export type team_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a team_members.
     */
    data: XOR<team_membersUpdateInput, team_membersUncheckedUpdateInput>
    /**
     * Choose, which team_members to update.
     */
    where: team_membersWhereUniqueInput
  }

  /**
   * team_members updateMany
   */
  export type team_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update team_members.
     */
    data: XOR<team_membersUpdateManyMutationInput, team_membersUncheckedUpdateManyInput>
    /**
     * Filter which team_members to update
     */
    where?: team_membersWhereInput
  }

  /**
   * team_members upsert
   */
  export type team_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the team_members to update in case it exists.
     */
    where: team_membersWhereUniqueInput
    /**
     * In case the team_members found by the `where` argument doesn't exist, create a new team_members with this data.
     */
    create: XOR<team_membersCreateInput, team_membersUncheckedCreateInput>
    /**
     * In case the team_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<team_membersUpdateInput, team_membersUncheckedUpdateInput>
  }

  /**
   * team_members delete
   */
  export type team_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * Filter which team_members to delete.
     */
    where: team_membersWhereUniqueInput
  }

  /**
   * team_members deleteMany
   */
  export type team_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_members to delete
     */
    where?: team_membersWhereInput
  }

  /**
   * team_members without action
   */
  export type team_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    password: 'password',
    nickname: 'nickname',
    cash: 'cash',
    matches: 'matches',
    win: 'win',
    lost: 'lost',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const My_agentsScalarFieldEnum: {
    my_agent_id: 'my_agent_id',
    agent_id: 'agent_id',
    user_id: 'user_id',
    agent_name: 'agent_name',
    count: 'count',
    createdAt: 'createdAt'
  };

  export type My_agentsScalarFieldEnum = (typeof My_agentsScalarFieldEnum)[keyof typeof My_agentsScalarFieldEnum]


  export const Team_membersScalarFieldEnum: {
    team_id: 'team_id',
    user_id: 'user_id',
    agent_ids: 'agent_ids',
    team_name: 'team_name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Team_membersScalarFieldEnum = (typeof Team_membersScalarFieldEnum)[keyof typeof Team_membersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    nickname?: StringFilter<"users"> | string
    cash?: IntFilter<"users"> | number
    matches?: IntFilter<"users"> | number
    win?: IntFilter<"users"> | number
    lost?: IntFilter<"users"> | number
    createdAt?: DateTimeFilter<"users"> | Date | string
    team_members?: Team_membersListRelationFilter
    my_agents?: My_agentsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    cash?: SortOrder
    matches?: SortOrder
    win?: SortOrder
    lost?: SortOrder
    createdAt?: SortOrder
    team_members?: team_membersOrderByRelationAggregateInput
    my_agents?: my_agentsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    nickname?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    cash?: IntFilter<"users"> | number
    matches?: IntFilter<"users"> | number
    win?: IntFilter<"users"> | number
    lost?: IntFilter<"users"> | number
    createdAt?: DateTimeFilter<"users"> | Date | string
    team_members?: Team_membersListRelationFilter
    my_agents?: My_agentsListRelationFilter
  }, "user_id" | "nickname">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    cash?: SortOrder
    matches?: SortOrder
    win?: SortOrder
    lost?: SortOrder
    createdAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    nickname?: StringWithAggregatesFilter<"users"> | string
    cash?: IntWithAggregatesFilter<"users"> | number
    matches?: IntWithAggregatesFilter<"users"> | number
    win?: IntWithAggregatesFilter<"users"> | number
    lost?: IntWithAggregatesFilter<"users"> | number
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type my_agentsWhereInput = {
    AND?: my_agentsWhereInput | my_agentsWhereInput[]
    OR?: my_agentsWhereInput[]
    NOT?: my_agentsWhereInput | my_agentsWhereInput[]
    my_agent_id?: IntFilter<"my_agents"> | number
    agent_id?: IntFilter<"my_agents"> | number
    user_id?: StringFilter<"my_agents"> | string
    agent_name?: StringFilter<"my_agents"> | string
    count?: IntFilter<"my_agents"> | number
    createdAt?: DateTimeFilter<"my_agents"> | Date | string
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type my_agentsOrderByWithRelationInput = {
    my_agent_id?: SortOrder
    agent_id?: SortOrder
    user_id?: SortOrder
    agent_name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type my_agentsWhereUniqueInput = Prisma.AtLeast<{
    my_agent_id?: number
    AND?: my_agentsWhereInput | my_agentsWhereInput[]
    OR?: my_agentsWhereInput[]
    NOT?: my_agentsWhereInput | my_agentsWhereInput[]
    agent_id?: IntFilter<"my_agents"> | number
    user_id?: StringFilter<"my_agents"> | string
    agent_name?: StringFilter<"my_agents"> | string
    count?: IntFilter<"my_agents"> | number
    createdAt?: DateTimeFilter<"my_agents"> | Date | string
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }, "my_agent_id">

  export type my_agentsOrderByWithAggregationInput = {
    my_agent_id?: SortOrder
    agent_id?: SortOrder
    user_id?: SortOrder
    agent_name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    _count?: my_agentsCountOrderByAggregateInput
    _avg?: my_agentsAvgOrderByAggregateInput
    _max?: my_agentsMaxOrderByAggregateInput
    _min?: my_agentsMinOrderByAggregateInput
    _sum?: my_agentsSumOrderByAggregateInput
  }

  export type my_agentsScalarWhereWithAggregatesInput = {
    AND?: my_agentsScalarWhereWithAggregatesInput | my_agentsScalarWhereWithAggregatesInput[]
    OR?: my_agentsScalarWhereWithAggregatesInput[]
    NOT?: my_agentsScalarWhereWithAggregatesInput | my_agentsScalarWhereWithAggregatesInput[]
    my_agent_id?: IntWithAggregatesFilter<"my_agents"> | number
    agent_id?: IntWithAggregatesFilter<"my_agents"> | number
    user_id?: StringWithAggregatesFilter<"my_agents"> | string
    agent_name?: StringWithAggregatesFilter<"my_agents"> | string
    count?: IntWithAggregatesFilter<"my_agents"> | number
    createdAt?: DateTimeWithAggregatesFilter<"my_agents"> | Date | string
  }

  export type team_membersWhereInput = {
    AND?: team_membersWhereInput | team_membersWhereInput[]
    OR?: team_membersWhereInput[]
    NOT?: team_membersWhereInput | team_membersWhereInput[]
    team_id?: IntFilter<"team_members"> | number
    user_id?: StringFilter<"team_members"> | string
    agent_ids?: JsonFilter<"team_members">
    team_name?: StringFilter<"team_members"> | string
    createdAt?: DateTimeFilter<"team_members"> | Date | string
    updatedAt?: DateTimeFilter<"team_members"> | Date | string
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type team_membersOrderByWithRelationInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    agent_ids?: SortOrder
    team_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type team_membersWhereUniqueInput = Prisma.AtLeast<{
    team_id?: number
    AND?: team_membersWhereInput | team_membersWhereInput[]
    OR?: team_membersWhereInput[]
    NOT?: team_membersWhereInput | team_membersWhereInput[]
    user_id?: StringFilter<"team_members"> | string
    agent_ids?: JsonFilter<"team_members">
    team_name?: StringFilter<"team_members"> | string
    createdAt?: DateTimeFilter<"team_members"> | Date | string
    updatedAt?: DateTimeFilter<"team_members"> | Date | string
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }, "team_id">

  export type team_membersOrderByWithAggregationInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    agent_ids?: SortOrder
    team_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: team_membersCountOrderByAggregateInput
    _avg?: team_membersAvgOrderByAggregateInput
    _max?: team_membersMaxOrderByAggregateInput
    _min?: team_membersMinOrderByAggregateInput
    _sum?: team_membersSumOrderByAggregateInput
  }

  export type team_membersScalarWhereWithAggregatesInput = {
    AND?: team_membersScalarWhereWithAggregatesInput | team_membersScalarWhereWithAggregatesInput[]
    OR?: team_membersScalarWhereWithAggregatesInput[]
    NOT?: team_membersScalarWhereWithAggregatesInput | team_membersScalarWhereWithAggregatesInput[]
    team_id?: IntWithAggregatesFilter<"team_members"> | number
    user_id?: StringWithAggregatesFilter<"team_members"> | string
    agent_ids?: JsonWithAggregatesFilter<"team_members">
    team_name?: StringWithAggregatesFilter<"team_members"> | string
    createdAt?: DateTimeWithAggregatesFilter<"team_members"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"team_members"> | Date | string
  }

  export type usersCreateInput = {
    user_id: string
    password: string
    nickname: string
    cash?: number
    matches?: number
    win?: number
    lost?: number
    createdAt?: Date | string
    team_members?: team_membersCreateNestedManyWithoutUsersInput
    my_agents?: my_agentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id: string
    password: string
    nickname: string
    cash?: number
    matches?: number
    win?: number
    lost?: number
    createdAt?: Date | string
    team_members?: team_membersUncheckedCreateNestedManyWithoutUsersInput
    my_agents?: my_agentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    win?: IntFieldUpdateOperationsInput | number
    lost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUpdateManyWithoutUsersNestedInput
    my_agents?: my_agentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    win?: IntFieldUpdateOperationsInput | number
    lost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUncheckedUpdateManyWithoutUsersNestedInput
    my_agents?: my_agentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id: string
    password: string
    nickname: string
    cash?: number
    matches?: number
    win?: number
    lost?: number
    createdAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    win?: IntFieldUpdateOperationsInput | number
    lost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    win?: IntFieldUpdateOperationsInput | number
    lost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type my_agentsCreateInput = {
    agent_id: number
    agent_name: string
    count?: number
    createdAt?: Date | string
    users: usersCreateNestedOneWithoutMy_agentsInput
  }

  export type my_agentsUncheckedCreateInput = {
    my_agent_id?: number
    agent_id: number
    user_id: string
    agent_name: string
    count?: number
    createdAt?: Date | string
  }

  export type my_agentsUpdateInput = {
    agent_id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutMy_agentsNestedInput
  }

  export type my_agentsUncheckedUpdateInput = {
    my_agent_id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    agent_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type my_agentsCreateManyInput = {
    my_agent_id?: number
    agent_id: number
    user_id: string
    agent_name: string
    count?: number
    createdAt?: Date | string
  }

  export type my_agentsUpdateManyMutationInput = {
    agent_id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type my_agentsUncheckedUpdateManyInput = {
    my_agent_id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    agent_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type team_membersCreateInput = {
    agent_ids: JsonNullValueInput | InputJsonValue
    team_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users: usersCreateNestedOneWithoutTeam_membersInput
  }

  export type team_membersUncheckedCreateInput = {
    team_id?: number
    user_id: string
    agent_ids: JsonNullValueInput | InputJsonValue
    team_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type team_membersUpdateInput = {
    agent_ids?: JsonNullValueInput | InputJsonValue
    team_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutTeam_membersNestedInput
  }

  export type team_membersUncheckedUpdateInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    agent_ids?: JsonNullValueInput | InputJsonValue
    team_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type team_membersCreateManyInput = {
    team_id?: number
    user_id: string
    agent_ids: JsonNullValueInput | InputJsonValue
    team_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type team_membersUpdateManyMutationInput = {
    agent_ids?: JsonNullValueInput | InputJsonValue
    team_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type team_membersUncheckedUpdateManyInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    agent_ids?: JsonNullValueInput | InputJsonValue
    team_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Team_membersListRelationFilter = {
    every?: team_membersWhereInput
    some?: team_membersWhereInput
    none?: team_membersWhereInput
  }

  export type My_agentsListRelationFilter = {
    every?: my_agentsWhereInput
    some?: my_agentsWhereInput
    none?: my_agentsWhereInput
  }

  export type team_membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type my_agentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    cash?: SortOrder
    matches?: SortOrder
    win?: SortOrder
    lost?: SortOrder
    createdAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    cash?: SortOrder
    matches?: SortOrder
    win?: SortOrder
    lost?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    cash?: SortOrder
    matches?: SortOrder
    win?: SortOrder
    lost?: SortOrder
    createdAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    cash?: SortOrder
    matches?: SortOrder
    win?: SortOrder
    lost?: SortOrder
    createdAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    cash?: SortOrder
    matches?: SortOrder
    win?: SortOrder
    lost?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type my_agentsCountOrderByAggregateInput = {
    my_agent_id?: SortOrder
    agent_id?: SortOrder
    user_id?: SortOrder
    agent_name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
  }

  export type my_agentsAvgOrderByAggregateInput = {
    my_agent_id?: SortOrder
    agent_id?: SortOrder
    count?: SortOrder
  }

  export type my_agentsMaxOrderByAggregateInput = {
    my_agent_id?: SortOrder
    agent_id?: SortOrder
    user_id?: SortOrder
    agent_name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
  }

  export type my_agentsMinOrderByAggregateInput = {
    my_agent_id?: SortOrder
    agent_id?: SortOrder
    user_id?: SortOrder
    agent_name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
  }

  export type my_agentsSumOrderByAggregateInput = {
    my_agent_id?: SortOrder
    agent_id?: SortOrder
    count?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type team_membersCountOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    agent_ids?: SortOrder
    team_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type team_membersAvgOrderByAggregateInput = {
    team_id?: SortOrder
  }

  export type team_membersMaxOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    team_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type team_membersMinOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    team_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type team_membersSumOrderByAggregateInput = {
    team_id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type team_membersCreateNestedManyWithoutUsersInput = {
    create?: XOR<team_membersCreateWithoutUsersInput, team_membersUncheckedCreateWithoutUsersInput> | team_membersCreateWithoutUsersInput[] | team_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_membersCreateOrConnectWithoutUsersInput | team_membersCreateOrConnectWithoutUsersInput[]
    createMany?: team_membersCreateManyUsersInputEnvelope
    connect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
  }

  export type my_agentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<my_agentsCreateWithoutUsersInput, my_agentsUncheckedCreateWithoutUsersInput> | my_agentsCreateWithoutUsersInput[] | my_agentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: my_agentsCreateOrConnectWithoutUsersInput | my_agentsCreateOrConnectWithoutUsersInput[]
    createMany?: my_agentsCreateManyUsersInputEnvelope
    connect?: my_agentsWhereUniqueInput | my_agentsWhereUniqueInput[]
  }

  export type team_membersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<team_membersCreateWithoutUsersInput, team_membersUncheckedCreateWithoutUsersInput> | team_membersCreateWithoutUsersInput[] | team_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_membersCreateOrConnectWithoutUsersInput | team_membersCreateOrConnectWithoutUsersInput[]
    createMany?: team_membersCreateManyUsersInputEnvelope
    connect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
  }

  export type my_agentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<my_agentsCreateWithoutUsersInput, my_agentsUncheckedCreateWithoutUsersInput> | my_agentsCreateWithoutUsersInput[] | my_agentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: my_agentsCreateOrConnectWithoutUsersInput | my_agentsCreateOrConnectWithoutUsersInput[]
    createMany?: my_agentsCreateManyUsersInputEnvelope
    connect?: my_agentsWhereUniqueInput | my_agentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type team_membersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<team_membersCreateWithoutUsersInput, team_membersUncheckedCreateWithoutUsersInput> | team_membersCreateWithoutUsersInput[] | team_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_membersCreateOrConnectWithoutUsersInput | team_membersCreateOrConnectWithoutUsersInput[]
    upsert?: team_membersUpsertWithWhereUniqueWithoutUsersInput | team_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: team_membersCreateManyUsersInputEnvelope
    set?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    disconnect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    delete?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    connect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    update?: team_membersUpdateWithWhereUniqueWithoutUsersInput | team_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: team_membersUpdateManyWithWhereWithoutUsersInput | team_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: team_membersScalarWhereInput | team_membersScalarWhereInput[]
  }

  export type my_agentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<my_agentsCreateWithoutUsersInput, my_agentsUncheckedCreateWithoutUsersInput> | my_agentsCreateWithoutUsersInput[] | my_agentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: my_agentsCreateOrConnectWithoutUsersInput | my_agentsCreateOrConnectWithoutUsersInput[]
    upsert?: my_agentsUpsertWithWhereUniqueWithoutUsersInput | my_agentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: my_agentsCreateManyUsersInputEnvelope
    set?: my_agentsWhereUniqueInput | my_agentsWhereUniqueInput[]
    disconnect?: my_agentsWhereUniqueInput | my_agentsWhereUniqueInput[]
    delete?: my_agentsWhereUniqueInput | my_agentsWhereUniqueInput[]
    connect?: my_agentsWhereUniqueInput | my_agentsWhereUniqueInput[]
    update?: my_agentsUpdateWithWhereUniqueWithoutUsersInput | my_agentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: my_agentsUpdateManyWithWhereWithoutUsersInput | my_agentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: my_agentsScalarWhereInput | my_agentsScalarWhereInput[]
  }

  export type team_membersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<team_membersCreateWithoutUsersInput, team_membersUncheckedCreateWithoutUsersInput> | team_membersCreateWithoutUsersInput[] | team_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_membersCreateOrConnectWithoutUsersInput | team_membersCreateOrConnectWithoutUsersInput[]
    upsert?: team_membersUpsertWithWhereUniqueWithoutUsersInput | team_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: team_membersCreateManyUsersInputEnvelope
    set?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    disconnect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    delete?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    connect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    update?: team_membersUpdateWithWhereUniqueWithoutUsersInput | team_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: team_membersUpdateManyWithWhereWithoutUsersInput | team_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: team_membersScalarWhereInput | team_membersScalarWhereInput[]
  }

  export type my_agentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<my_agentsCreateWithoutUsersInput, my_agentsUncheckedCreateWithoutUsersInput> | my_agentsCreateWithoutUsersInput[] | my_agentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: my_agentsCreateOrConnectWithoutUsersInput | my_agentsCreateOrConnectWithoutUsersInput[]
    upsert?: my_agentsUpsertWithWhereUniqueWithoutUsersInput | my_agentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: my_agentsCreateManyUsersInputEnvelope
    set?: my_agentsWhereUniqueInput | my_agentsWhereUniqueInput[]
    disconnect?: my_agentsWhereUniqueInput | my_agentsWhereUniqueInput[]
    delete?: my_agentsWhereUniqueInput | my_agentsWhereUniqueInput[]
    connect?: my_agentsWhereUniqueInput | my_agentsWhereUniqueInput[]
    update?: my_agentsUpdateWithWhereUniqueWithoutUsersInput | my_agentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: my_agentsUpdateManyWithWhereWithoutUsersInput | my_agentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: my_agentsScalarWhereInput | my_agentsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutMy_agentsInput = {
    create?: XOR<usersCreateWithoutMy_agentsInput, usersUncheckedCreateWithoutMy_agentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMy_agentsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutMy_agentsNestedInput = {
    create?: XOR<usersCreateWithoutMy_agentsInput, usersUncheckedCreateWithoutMy_agentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMy_agentsInput
    upsert?: usersUpsertWithoutMy_agentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMy_agentsInput, usersUpdateWithoutMy_agentsInput>, usersUncheckedUpdateWithoutMy_agentsInput>
  }

  export type usersCreateNestedOneWithoutTeam_membersInput = {
    create?: XOR<usersCreateWithoutTeam_membersInput, usersUncheckedCreateWithoutTeam_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTeam_membersInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutTeam_membersNestedInput = {
    create?: XOR<usersCreateWithoutTeam_membersInput, usersUncheckedCreateWithoutTeam_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTeam_membersInput
    upsert?: usersUpsertWithoutTeam_membersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTeam_membersInput, usersUpdateWithoutTeam_membersInput>, usersUncheckedUpdateWithoutTeam_membersInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type team_membersCreateWithoutUsersInput = {
    agent_ids: JsonNullValueInput | InputJsonValue
    team_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type team_membersUncheckedCreateWithoutUsersInput = {
    team_id?: number
    agent_ids: JsonNullValueInput | InputJsonValue
    team_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type team_membersCreateOrConnectWithoutUsersInput = {
    where: team_membersWhereUniqueInput
    create: XOR<team_membersCreateWithoutUsersInput, team_membersUncheckedCreateWithoutUsersInput>
  }

  export type team_membersCreateManyUsersInputEnvelope = {
    data: team_membersCreateManyUsersInput | team_membersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type my_agentsCreateWithoutUsersInput = {
    agent_id: number
    agent_name: string
    count?: number
    createdAt?: Date | string
  }

  export type my_agentsUncheckedCreateWithoutUsersInput = {
    my_agent_id?: number
    agent_id: number
    agent_name: string
    count?: number
    createdAt?: Date | string
  }

  export type my_agentsCreateOrConnectWithoutUsersInput = {
    where: my_agentsWhereUniqueInput
    create: XOR<my_agentsCreateWithoutUsersInput, my_agentsUncheckedCreateWithoutUsersInput>
  }

  export type my_agentsCreateManyUsersInputEnvelope = {
    data: my_agentsCreateManyUsersInput | my_agentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type team_membersUpsertWithWhereUniqueWithoutUsersInput = {
    where: team_membersWhereUniqueInput
    update: XOR<team_membersUpdateWithoutUsersInput, team_membersUncheckedUpdateWithoutUsersInput>
    create: XOR<team_membersCreateWithoutUsersInput, team_membersUncheckedCreateWithoutUsersInput>
  }

  export type team_membersUpdateWithWhereUniqueWithoutUsersInput = {
    where: team_membersWhereUniqueInput
    data: XOR<team_membersUpdateWithoutUsersInput, team_membersUncheckedUpdateWithoutUsersInput>
  }

  export type team_membersUpdateManyWithWhereWithoutUsersInput = {
    where: team_membersScalarWhereInput
    data: XOR<team_membersUpdateManyMutationInput, team_membersUncheckedUpdateManyWithoutUsersInput>
  }

  export type team_membersScalarWhereInput = {
    AND?: team_membersScalarWhereInput | team_membersScalarWhereInput[]
    OR?: team_membersScalarWhereInput[]
    NOT?: team_membersScalarWhereInput | team_membersScalarWhereInput[]
    team_id?: IntFilter<"team_members"> | number
    user_id?: StringFilter<"team_members"> | string
    agent_ids?: JsonFilter<"team_members">
    team_name?: StringFilter<"team_members"> | string
    createdAt?: DateTimeFilter<"team_members"> | Date | string
    updatedAt?: DateTimeFilter<"team_members"> | Date | string
  }

  export type my_agentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: my_agentsWhereUniqueInput
    update: XOR<my_agentsUpdateWithoutUsersInput, my_agentsUncheckedUpdateWithoutUsersInput>
    create: XOR<my_agentsCreateWithoutUsersInput, my_agentsUncheckedCreateWithoutUsersInput>
  }

  export type my_agentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: my_agentsWhereUniqueInput
    data: XOR<my_agentsUpdateWithoutUsersInput, my_agentsUncheckedUpdateWithoutUsersInput>
  }

  export type my_agentsUpdateManyWithWhereWithoutUsersInput = {
    where: my_agentsScalarWhereInput
    data: XOR<my_agentsUpdateManyMutationInput, my_agentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type my_agentsScalarWhereInput = {
    AND?: my_agentsScalarWhereInput | my_agentsScalarWhereInput[]
    OR?: my_agentsScalarWhereInput[]
    NOT?: my_agentsScalarWhereInput | my_agentsScalarWhereInput[]
    my_agent_id?: IntFilter<"my_agents"> | number
    agent_id?: IntFilter<"my_agents"> | number
    user_id?: StringFilter<"my_agents"> | string
    agent_name?: StringFilter<"my_agents"> | string
    count?: IntFilter<"my_agents"> | number
    createdAt?: DateTimeFilter<"my_agents"> | Date | string
  }

  export type usersCreateWithoutMy_agentsInput = {
    user_id: string
    password: string
    nickname: string
    cash?: number
    matches?: number
    win?: number
    lost?: number
    createdAt?: Date | string
    team_members?: team_membersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMy_agentsInput = {
    user_id: string
    password: string
    nickname: string
    cash?: number
    matches?: number
    win?: number
    lost?: number
    createdAt?: Date | string
    team_members?: team_membersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMy_agentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMy_agentsInput, usersUncheckedCreateWithoutMy_agentsInput>
  }

  export type usersUpsertWithoutMy_agentsInput = {
    update: XOR<usersUpdateWithoutMy_agentsInput, usersUncheckedUpdateWithoutMy_agentsInput>
    create: XOR<usersCreateWithoutMy_agentsInput, usersUncheckedCreateWithoutMy_agentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMy_agentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMy_agentsInput, usersUncheckedUpdateWithoutMy_agentsInput>
  }

  export type usersUpdateWithoutMy_agentsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    win?: IntFieldUpdateOperationsInput | number
    lost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMy_agentsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    win?: IntFieldUpdateOperationsInput | number
    lost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutTeam_membersInput = {
    user_id: string
    password: string
    nickname: string
    cash?: number
    matches?: number
    win?: number
    lost?: number
    createdAt?: Date | string
    my_agents?: my_agentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTeam_membersInput = {
    user_id: string
    password: string
    nickname: string
    cash?: number
    matches?: number
    win?: number
    lost?: number
    createdAt?: Date | string
    my_agents?: my_agentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTeam_membersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTeam_membersInput, usersUncheckedCreateWithoutTeam_membersInput>
  }

  export type usersUpsertWithoutTeam_membersInput = {
    update: XOR<usersUpdateWithoutTeam_membersInput, usersUncheckedUpdateWithoutTeam_membersInput>
    create: XOR<usersCreateWithoutTeam_membersInput, usersUncheckedCreateWithoutTeam_membersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTeam_membersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTeam_membersInput, usersUncheckedUpdateWithoutTeam_membersInput>
  }

  export type usersUpdateWithoutTeam_membersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    win?: IntFieldUpdateOperationsInput | number
    lost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    my_agents?: my_agentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTeam_membersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    cash?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    win?: IntFieldUpdateOperationsInput | number
    lost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    my_agents?: my_agentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type team_membersCreateManyUsersInput = {
    team_id?: number
    agent_ids: JsonNullValueInput | InputJsonValue
    team_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type my_agentsCreateManyUsersInput = {
    my_agent_id?: number
    agent_id: number
    agent_name: string
    count?: number
    createdAt?: Date | string
  }

  export type team_membersUpdateWithoutUsersInput = {
    agent_ids?: JsonNullValueInput | InputJsonValue
    team_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type team_membersUncheckedUpdateWithoutUsersInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    agent_ids?: JsonNullValueInput | InputJsonValue
    team_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type team_membersUncheckedUpdateManyWithoutUsersInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    agent_ids?: JsonNullValueInput | InputJsonValue
    team_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type my_agentsUpdateWithoutUsersInput = {
    agent_id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type my_agentsUncheckedUpdateWithoutUsersInput = {
    my_agent_id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type my_agentsUncheckedUpdateManyWithoutUsersInput = {
    my_agent_id?: IntFieldUpdateOperationsInput | number
    agent_id?: IntFieldUpdateOperationsInput | number
    agent_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use my_agentsDefaultArgs instead
     */
    export type my_agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = my_agentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use team_membersDefaultArgs instead
     */
    export type team_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = team_membersDefaultArgs<ExtArgs>

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