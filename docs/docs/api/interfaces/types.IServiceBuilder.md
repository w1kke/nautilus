---
id: "types.IServiceBuilder"
title: "Interface: IServiceBuilder<S, F>"
sidebar_label: "IServiceBuilder"
custom_edit_url: null
---

[@types](../modules/types.md).IServiceBuilder

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`ServiceTypes`](../enums/Nautilus.ServiceTypes.md) |
| `F` | extends [`FileTypes`](../enums/Nautilus.FileTypes.md) |

## Hierarchy

- [`IBuilder`](types.IBuilder.md)<`NautilusService`<`S`, `F`\>\>

  ↳ **`IServiceBuilder`**

## Implemented by

- [`ServiceBuilder`](../classes/Nautilus.ServiceBuilder.md)

## Properties

### addConsumerParameter

• **addConsumerParameter**: (`parameter`: `NautilusConsumerParameter`) => [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Type declaration

▸ (`parameter`): [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `parameter` | `NautilusConsumerParameter` |

##### Returns

[`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Defined in

[src/@types/Nautilus.ts:56](https://github.com/deltaDAO/nautilus/blob/9e325d7/src/@types/Nautilus.ts#L56)

___

### addFile

• **addFile**: (`file`: [`ServiceFileType`](../modules/Nautilus.md#servicefiletype)<`F`\>) => [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Type declaration

▸ (`file`): [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`ServiceFileType`](../modules/Nautilus.md#servicefiletype)<`F`\> |

##### Returns

[`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Defined in

[src/@types/Nautilus.ts:55](https://github.com/deltaDAO/nautilus/blob/9e325d7/src/@types/Nautilus.ts#L55)

___

### addTrustedAlgorithm

• **addTrustedAlgorithm**: (`algorithm`: `PublisherTrustedAlgorithm`) => [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Type declaration

▸ (`algorithm`): [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `PublisherTrustedAlgorithm` |

##### Returns

[`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Defined in

[src/@types/Nautilus.ts:60](https://github.com/deltaDAO/nautilus/blob/9e325d7/src/@types/Nautilus.ts#L60)

___

### addTrustedAlgorithmPublisher

• **addTrustedAlgorithmPublisher**: (`publisher`: `string`) => [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Type declaration

▸ (`publisher`): [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `publisher` | `string` |

##### Returns

[`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Defined in

[src/@types/Nautilus.ts:59](https://github.com/deltaDAO/nautilus/blob/9e325d7/src/@types/Nautilus.ts#L59)

___

### allowAlgorithmNetworkAccess

• **allowAlgorithmNetworkAccess**: (`allow?`: `boolean`) => [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Type declaration

▸ (`allow?`): [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `allow?` | `boolean` |

##### Returns

[`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Defined in

[src/@types/Nautilus.ts:64](https://github.com/deltaDAO/nautilus/blob/9e325d7/src/@types/Nautilus.ts#L64)

___

### allowRawAlgorithms

• **allowRawAlgorithms**: (`allow?`: `boolean`) => [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Type declaration

▸ (`allow?`): [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `allow?` | `boolean` |

##### Returns

[`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Defined in

[src/@types/Nautilus.ts:63](https://github.com/deltaDAO/nautilus/blob/9e325d7/src/@types/Nautilus.ts#L63)

___

### build

• **build**: () => `NautilusService`<`S`, `F`\>

#### Type declaration

▸ (): `NautilusService`<`S`, `F`\>

##### Returns

`NautilusService`<`S`, `F`\>

#### Inherited from

[IBuilder](types.IBuilder.md).[build](types.IBuilder.md#build)

#### Defined in

[src/@types/Nautilus.ts:23](https://github.com/deltaDAO/nautilus/blob/9e325d7/src/@types/Nautilus.ts#L23)

___

### reset

• **reset**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[IBuilder](types.IBuilder.md).[reset](types.IBuilder.md#reset)

#### Defined in

[src/@types/Nautilus.ts:24](https://github.com/deltaDAO/nautilus/blob/9e325d7/src/@types/Nautilus.ts#L24)

___

### setDescription

• **setDescription**: (`description`: `string`) => [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Type declaration

▸ (`description`): [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Defined in

[src/@types/Nautilus.ts:53](https://github.com/deltaDAO/nautilus/blob/9e325d7/src/@types/Nautilus.ts#L53)

___

### setName

• **setName**: (`name`: `string`) => [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Type declaration

▸ (`name`): [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

[`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Defined in

[src/@types/Nautilus.ts:51](https://github.com/deltaDAO/nautilus/blob/9e325d7/src/@types/Nautilus.ts#L51)

___

### setServiceEndpoint

• **setServiceEndpoint**: (`endpoint`: `string`) => [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Type declaration

▸ (`endpoint`): [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |

##### Returns

[`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Defined in

[src/@types/Nautilus.ts:54](https://github.com/deltaDAO/nautilus/blob/9e325d7/src/@types/Nautilus.ts#L54)

___

### setTimeout

• **setTimeout**: (`timeout`: `number`) => [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Type declaration

▸ (`timeout`): [`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |

##### Returns

[`IServiceBuilder`](types.IServiceBuilder.md)<`S`, `F`\>

#### Defined in

[src/@types/Nautilus.ts:52](https://github.com/deltaDAO/nautilus/blob/9e325d7/src/@types/Nautilus.ts#L52)
