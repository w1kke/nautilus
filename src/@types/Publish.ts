import {
  Config,
  Credentials,
  DatatokenCreateParams,
  DDO,
  Files,
  FreCreationParams,
  Metadata,
  NftCreateData,
  Service
} from '@oceanprotocol/lib'
import Web3 from 'web3'

export interface CredentialConfig extends Credentials {}

export interface MetadataConfig extends Omit<Metadata, 'created' | 'updated'> {}

// TODO consider type MetadataConfig = Omit<Metadata, "created" | "updated">;

type PricingType = 'fixed' | 'free'

interface PricingConfig {
  type: PricingType
  freCreationParams?: FreCreationParams
}

interface TokenParameters {
  nftParams: NftCreateData
  datatokenParams: DatatokenCreateParams
}

type ServiceConfig = Omit<Service, 'id' | 'datatokenAddress' | 'files'> & {
  files: Files['files']
}

export type PrePublishDDO = Omit<DDO, 'services'> & {
  services: ServiceConfig[]
}

export interface AssetConfig {
  chainConfig: Config
  metadata: MetadataConfig
  services: ServiceConfig[]
  web3: Web3
  pricing: PricingConfig
  tokenParamaters: TokenParameters
}
