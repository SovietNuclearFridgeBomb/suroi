import { DataSplitTypes, Packet, PacketType } from "./packet";
import { PromotionalRoles, type PromotionalRoleDefinition } from "../definitions/promotionalRoles";

export interface PromotionalRoleData {
    readonly type: PacketType.PromotionalRole
    readonly role: PromotionalRoleDefinition
    readonly promote : boolean // false = demote, true = promote
    readonly playerId: number
    readonly attackerId?: number
}

export const PromotionalRolePacket = new Packet<PromotionalRoleData>(PacketType.PromotionalRole, {
    serialize(stream, data) {
        PromotionalRoles.writeToStream(stream, data.role)

        stream.writeBooleanGroup(data.promote, data.attackerId !== undefined)
        stream.writeObjectId(data.playerId)
        if (data.attackerId !== undefined) stream.writeObjectId(data.attackerId)
    },
    deserialize(stream, data) {
        data.role = PromotionalRoles.readFromStream(stream);
        let hasAttackerId: boolean
        [data.promote, hasAttackerId] = stream.readBooleanGroup()
        data.playerId = stream.readObjectId()
        if (hasAttackerId) data.attackerId = stream.readObjectId()
    }
});