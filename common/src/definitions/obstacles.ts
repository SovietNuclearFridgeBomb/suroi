import { type ObjectDefinition, ObjectDefinitions } from "../utils/objectDefinitions";
import {
    CircleHitbox, type Hitbox, RectangleHitbox
} from "../utils/hitbox";
import { v } from "../utils/vector";

export interface ObstacleChildren extends ObjectDefinition {
    readonly idvariant: number
    readonly prob?: number
    readonly num?: number
}
export interface ObstacleDefinition extends ObjectDefinition {
    readonly material: "tree" | "stone" | "bush" | "crate" | "metal"
    readonly health: number
    readonly invulnerable?: boolean
    readonly scale: {
        readonly spawnMin: number
        readonly spawnMax: number
        readonly destroy: number
    }
    readonly hitbox: Hitbox
    readonly spawnHitbox?: Hitbox
    readonly noCollisions?: boolean
    readonly rotationMode: "full" | "limited" | "binary" | "none"
    readonly variations?: number
    readonly particleVariations?: number
    readonly depth?: number // the obstacle z index
    readonly hasLoot?: boolean
    readonly children?: ObstacleChildren[]
    specialID?: string
    readonly explosion?: string
}

export const Materials: string[] = ["tree", "stone", "bush", "crate", "metal"];

export const Obstacles = new ObjectDefinitions<ObstacleDefinition>(
    [
        {
            idString: "oak_tree",
            name: "Oak Tree",
            material: "tree",
            health: 180,
            scale: {
                spawnMin: 0.9,
                spawnMax: 1.1,
                destroy: 0.75
            },
            hitbox: new CircleHitbox(3),
            spawnHitbox: new CircleHitbox(15),
            rotationMode: "full",
            variations: 3,
            depth: 4
        },
        {
            idString: "pine_tree",
            name: "Pine Tree",
            material: "tree",
            health: 180,
            scale: {
                spawnMin: 0.9,
                spawnMax: 1.1,
                destroy: 0.75
            },
            hitbox: new CircleHitbox(7),
            spawnHitbox: new CircleHitbox(15),
            rotationMode: "full",
            depth: 4
        },
        {
            idString: "rock",
            name: "Rock",
            material: "stone",
            health: 200,
            scale: {
                spawnMin: 0.9,
                spawnMax: 1.1,
                destroy: 0.5
            },
            hitbox: new CircleHitbox(3.85),
            spawnHitbox: new CircleHitbox(4.5),
            rotationMode: "full",
            variations: 5,
            particleVariations: 2
        },
        {
            idString: "bush",
            name: "Bush",
            material: "bush",
            health: 80,
            scale: {
                spawnMin: 0.9,
                spawnMax: 1.1,
                destroy: 0.8
            },
            hitbox: new CircleHitbox(4),
            noCollisions: true,
            rotationMode: "full",
            variations: 2,
            particleVariations: 2,
            depth: 3
        },
        {
            idString: "regular_crate",
            name: "Regular Crate",
            material: "crate",
            health: 100,
            scale: {
                spawnMin: 1.0,
                spawnMax: 1.0,
                destroy: 0.5
            },
            hitbox: new RectangleHitbox(v(-4.3, -4.3), v(4.3, 4.3)),
            rotationMode: "binary",
            hasLoot: true
        },
        {
            idString: "barrel",
            name: "Barrel",
            material: "metal",
            health: 160,
            scale: {
                spawnMin: 1.0,
                spawnMax: 1.0,
                destroy: 0.5
            },
            hitbox: new CircleHitbox(3.45),
            rotationMode: "full",
            explosion: "barrel_explosion"
        },
        {
            idString: "super_barrel",
            name: "Super Barrel",
            material: "metal",
            health: 240,
            scale: {
                spawnMin: 1.0,
                spawnMax: 1.0,
                destroy: 0.5
            },
            hitbox: new CircleHitbox(3.45),
            rotationMode: "full",
            explosion: "super_barrel_explosion"
        },
        {
            idString: "health_crate",
            name: "Health Crate",
            material: "crate",
            health: 120,
            scale: {
                spawnMin: 1.0,
                spawnMax: 1.0,
                destroy: 0.6
            },
            hitbox: new RectangleHitbox(v(-4.3, -4.3), v(4.3, 4.3)),
            rotationMode: "none",
            hasLoot: true
        },
        {
            idString: "special_crate",
            name: "Special Crate",
            material: "crate",
            health: 120,
            scale: {
                spawnMin: 1.0,
                spawnMax: 1.0,
                destroy: 0.6
            },
            hitbox: new RectangleHitbox(v(-2.9, -2.9), v(2.9, 2.9)),
            rotationMode: "none",
            hasLoot: true,
            children: [
                {
                    idString: "cola_crate",
                    name: "Cola Crate",
                    idvariant: 1
                },
                {
                    idString: "gauze_crate",
                    name: "Gauze Crate",
                    idvariant: 2
                },
                {
                    idString: "deathray_crate",
                    name: "Deathray Crate",
                    idvariant: 3
                },
                {
                    idString: "knife_crate",
                    name: "Knife Crate",
                    idvariant: 4
                },
                {
                    idString: "clubs_crate",
                    name: "Clubs Crate",
                    idvariant: 5
                }
            ],
            variations: 8
        },
        {
            idString: "gold_rock",
            name: "Gold Rock",
            material: "stone",
            health: 250,
            scale: {
                spawnMin: 0.9,
                spawnMax: 1.1,
                destroy: 0.3
            },
            hitbox: new CircleHitbox(3.85),
            spawnHitbox: new CircleHitbox(4.5),
            rotationMode: "full",
            hasLoot: true
        }
    ]
);
