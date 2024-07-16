export enum ShippingStatus {
  WAITING = 'waiting',
  SEARCHING = 'searching',
  ACCEPTED = 'accepted',
  REACHED_AT_PICKUP_POINT = 'reached_at_pickup_point',
  PICKED_UP = 'picked_up',
  REACHED_AT_DELIVERY_POINT = 'reached_at_delivery_point',
  DELIVERED = 'delivered',
  EXPIRED = 'expired',
  CANCELLED = 'cancelled',
  // IN_TRANSIT = 'in_transit',
}

// export type UpdateShippingStatus = Exclude<
//   ShippingStatus,
//   ShippingStatus.ACCEPTED
// >;

// export enum DeliveryStatus {
//   SEARCHING = 'searching',
//   ACCEPTED = 'accepted',
//   PICKED_UP = 'picked_up',
//   DELIVERED = 'delivered',
//   EXPIRED = 'expired',
//   CANCELLED = 'cancelled',
// }

// export enum DeliveryType {
//   PRODUCT_AND_TRANSPORT = 'product_and_transport',
//   TRANSPORTATION_ONLY = 'transportation_only',
//   WAREHOUSE_TRANSPORTATION = 'warehouse_transportation',
// }

// export const SHIPPING_STATUS = Object.values(ShippingStatus);

// export const SHIPPING_STATUS_KEYS = Object.keys(
//   ShippingStatus,
// ) as ShippingStatus[];

// export const SHIPPING_STATUS_MAP: Record<ShippingStatus, string> = {
//   [ShippingStatus.WAITING]: 'Waiting',
//   [ShippingStatus.ACCEPTED]: 'Accepted',
//   [ShippingStatus.PICKED_UP]: 'Picked Up',
//   [ShippingStatus.IN_TRANSIT]: 'In Transit',
//   [ShippingStatus.DELIVERED]: 'Delivered',
//   [ShippingStatus.CANCELLED]: 'Cancelled',
// };

// export const SHIPPING_STATUS_REVERSE_MAP: Record<string, ShippingStatus> = {
//   Waiting: ShippingStatus.WAITING,
//   Accepted: ShippingStatus.ACCEPTED,
//   'Picked Up': ShippingStatus.PICKED_UP,
//   'In Transit': ShippingStatus.IN_TRANSIT,
//   Delivered: ShippingStatus.DELIVERED,
//   Cancelled: ShippingStatus.CANCELLED,
// };

// export const SHIPPING_STATUS_DEFAULT = ShippingStatus.WAITING;

// export const SHIPPING_STATUS_DEFAULT_KEY = SHIPPING_STATUS_KEYS[0];

// export const SHIPPING_STATUS_DEFAULT_VALUE =
//   SHIPPING_STATUS_MAP[
//     SHIPPING_STATUS_DEFAULT as ShippingStatus | undefined | null
//   ];

// export const SHIPPING_STATUS_DEFAULT_VALUE_KEY = SHIPPING_STATUS_KEYS[0];

// export const SHIPPING_STATUS_DEFAULT_VALUE_VALUE =
//   SHIPPING_STATUS_MAP[SHIPPING_STATUS_DEFAULT_KEY];

// export const SHIPPING_STATUS_DEFAULT_VALUE_ENUM = SHIPPING_STATUS[0];

// export const SHIPPING_STATUS_DEFAULT_KEY_ENUM = SHIPPING_STATUS_KEYS[0];
