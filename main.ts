// Add this code in physics.ts

namespace physics {

    // Kinematics

    export function calculateForce(mass: number, acceleration: number): number {
        return mass * acceleration;
    }

    export function calculateVelocity(initialVelocity: number, acceleration: number, time: number): number {
        return initialVelocity + acceleration * time;
    }

    export function calculateDisplacement(initialVelocity: number, acceleration: number, time: number): number {
        return initialVelocity * time + 0.5 * acceleration * time * time;
    }

    // Momentum

    export function calculateMomentum(mass: number, velocity: number): number {
        return mass * velocity;
    }

    export function calculateImpulse(force: number, time: number): number {
        return force * time;
    }

    // Energy

    export function calculateKineticEnergy(mass: number, velocity: number): number {
        return 0.5 * mass * velocity * velocity;
    }

    export function calculatePotentialEnergy(mass: number, height: number, gravity: number = 9.8): number {
        return mass * height * gravity;
    }

    export function calculateWork(force: number, distance: number): number {
        return force * distance;
    }

    // Circular Motion

    export function calculateCentripetalForce(mass: number, velocity: number, radius: number): number {
        return (mass * velocity * velocity) / radius;
    }

    export function calculateAngularVelocity(velocity: number, radius: number): number {
        return velocity / radius;
    }
}

