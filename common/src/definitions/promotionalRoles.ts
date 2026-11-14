import { DefinitionType, ObjectDefinitions, type ObjectDefinition, type ReferenceTo, type ReifiableDef } from "../utils/objectDefinitions";
import { type GunDefinition } from "./items/guns";
import { type MeleeDefinition } from "./items/melees";
import { type PerkDefinition } from "./items/perks";
import { type SkinDefinition } from "./items/skins";
import { type ArmorDefinition } from "./items/armors";
import { type BackpackDefinition } from "./items/backpacks";
import { type HealingItemDefinition } from "./items/healingItems";
import { type AmmoDefinition } from "./items/ammos";
import { type ScopeDefinition } from "./items/scopes";
import { type ThrowableDefinition } from "./items/throwables";
import { type MapIndicatorDefinition } from "./mapIndicators";


type RoleGun = {
    idString: string
    preloadAmmo?: number
    fillInv?: boolean
} | ReifiableDef<GunDefinition>

export interface PromotionalRoleDefinition extends ObjectDefinition {
    readonly defType: DefinitionType.PromotionalRole
    readonly perks?: ReferenceTo<PerkDefinition>[]
    readonly skin?: ReferenceTo<SkinDefinition>
    readonly vest?: ReferenceTo<ArmorDefinition>
    readonly helmet?: ReferenceTo<ArmorDefinition>
    readonly backpack?: ReferenceTo<BackpackDefinition>
    readonly gun?: [RoleGun, RoleGun] | RoleGun
    readonly melee?: ReferenceTo<MeleeDefinition>
    readonly killFeed?: {
        promote?: boolean // Player promoted to Role!
        dead?: boolean // The Role is dead!
        badge?: string
        color?: number
    },
    readonly sound?: {
        promote?: string
        demote?: string
    },
    readonly inventory?: {
        healingItem?: Record<ReferenceTo<HealingItemDefinition>, number>
        ammo?: Record<ReferenceTo<AmmoDefinition>, number>
        scope?: ReferenceTo<ScopeDefinition>[]
        throwable?: Record<ReferenceTo<ThrowableDefinition>, number>
    }
    readonly indicator?: {
        alive?: ReferenceTo<MapIndicatorDefinition>
        dead?: ReferenceTo<MapIndicatorDefinition>
    }
}

const badgeId = (badge: string) => {
    return `bdg_${badge.toLowerCase().split(" ").join("_")}`
}

export const PromotionalRoles = new ObjectDefinitions<PromotionalRoleDefinition>([
    {
        idString: "juggernaut", // test example
        name: "Juggernaut",
        defType: DefinitionType.PromotionalRole,
        perks: ["experimental_forcefield", "tactical_reload", "extended_mags", "flechettes"],
        vest: "tactical_helmet",
        helmet: "tactical_vest",
        backpack: "tactical_pack",
        gun: ["mg5", "negev"],
        killFeed: {
            promote: true, // Player promoted to Role!
            dead: true, // The Role is dead!
        },
        indicator: {
            alive: "juggernaut_indicator"
        }
    }
])
