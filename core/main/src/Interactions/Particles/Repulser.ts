import { Particle } from "../../Core/Particle";
import type { Container } from "../../Core/Container";
import { NumberUtils } from "../../Utils";
import { IParticle } from "../../Core/Interfaces/IParticle";
import { ParticlesBase } from "./ParticlesBase";

export class Repulser extends ParticlesBase {
    constructor(container: Container) {
        super(container, "repulser");
    }

    public isEnabled(particle: Particle): boolean {
        return particle.options.repulse.enabled;
    }

    public reset(): void {
        // do nothing
    }

    public interact(p1: IParticle): void {
        const container = this.container;
        const repulseOpt1 = p1.options.repulse;
        const pos1 = p1.getPosition();

        const query = container.particles.quadTree.queryCircle(pos1, repulseOpt1.distance);

        for (const p2 of query) {
            if (p1 === p2 || p2.destroyed) {
                continue;
            }

            const pos2 = p2.getPosition();
            const { dx, dy, distance } = NumberUtils.getDistances(pos2, pos1);
            const velocity = repulseOpt1.speed * repulseOpt1.factor;
            if (distance > 0) {
                const repulseFactor = NumberUtils.clamp(
                    (1 - Math.pow(distance / repulseOpt1.distance, 2)) * velocity,
                    0,
                    velocity
                );
                const normVec = {
                    x: (dx / distance) * repulseFactor,
                    y: (dy / distance) * repulseFactor,
                };

                container.particles.mover.moveXY(p2, normVec.x, normVec.y);
            } else {
                container.particles.mover.moveXY(p2, velocity, velocity);
            }
        }
    }
}
