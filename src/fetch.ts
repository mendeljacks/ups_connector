import axios from 'axios'
import { writeFileSync } from 'fs'
import { snake_case } from './helpers/snake_case'

export const fetch = async () => {
    let base_url = 'https://www.ups.com/upsdeveloperkit/assets/json/'
    let assets = [
        'TimeInTransit',
        'QuantumView',
        'locator',
        'Shipment',
        'ShipConfirm',
        'ShipAccept',
        'Track',
        'Rate',
        'LabelRecovery',
        'VoidShipment',
        'PreNotification',
        'LandedCost',
        'DeniedPartyScreener',
        'XAV',
        'AddressValidation',
        'Delete',
        'PushToImageRepository',
        'Upload',
        'AcceptanceAuditPreCheck',
        'ChemicalReferenceData',
        'FreightPickup',
        'FreightCancelPickup',
        'FreightRate',
        'PickupCancel',
        'PickupCreation',
        'PickupGetPoliticalDivision1List',
        'PickupGetServiceCenterFacilitie',
        'PickupPendingStatus',
        'PickupRate',
        'FreightShip'
    ]

    for (let i = 0; i < assets.length; i++) {
        const asset = assets[i]
        const result = await axios(base_url + asset + '.js')
        const json = result.data.split('=').slice(1).join('')
        writeFileSync(
            `schemas/${snake_case(asset).slice(1)}.json`,
            JSON.stringify(JSON.parse(json), null, 4)
        )
    }
}

// https://www.ups.com/upsdeveloperkit/assets/json/...
