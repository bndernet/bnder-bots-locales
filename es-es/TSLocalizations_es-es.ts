import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_es_es {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string): string {
                return `La fecha límite para la tarea **${id}** vence el ${deadline} en el servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string): string {
                return `Has sido asignado a una tarea en el servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_embed_title(id: string): string {
                return `Tarea ${id} asignada`;
            },
            assigned_embed_footer: "Estas notificaciones pueden ser desactivadas por un administrador del servidor usando el comando \"/preferences direct_messages\"",
            assigned_embed_button_in_progress: "Marcar como en progreso",
            assigned_embed_button_done: "Marcar como hecho",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `La fecha límite para la tarea ${id} está vencida en el servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification(guildName: string, guildId: string): string {
                return `Una tarea a la que está asignado se ha repetido y debe hacerse en el servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Tarea ${id} repetida`;
            },
            deadline_alert: "Fecha límite de la tarea",
            commented_embed_title(id: string): string {
                return `Comentario añadido a la tarea ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Se ha añadido un comentario a una tarea en el servidor [${guildName}](https://discord.com/channels/${guildId}) por ${author}: ${commentText}`;
            },
            comment_response_button: "Responder al comentario",
            stop_followup_reminder_button: "Detener recordatorio de seguimiento",
            extend_deadline_by_one_day_button: "Ampliar el plazo 1 día",
            extend_deadline_by_two_days_button: "Ampliar el plazo 2 días",
            extend_deadline_by_one_week_button: "Ampliar el plazo 1 semana",
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Fecha límite",
            assignees_field: "Asignados",
            status_field: "Estado",
            subtasks_field: "Subtareas",
            delete_at_field: "Eliminar en",
            text_field: "Texto",
            project_field: "Proyecto",
            topic_field: "Tema",
            role_field: "Rol",
            permission_field: "Permiso",
            user_field: "Usuario",
            preset_field: "Preestablecido",
            priority_field: "Prioridad",
            label_field: "Etiqueta",
            personal_field: "Personal",
            manager_field: "Manager",
            repeat_interval_field: "Intervalo de repetición en días",
            repeat_end_date_field: "Fecha de finalización de repetición",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "En progreso";
                    case 2:
                        return "Hecho";
                    default:
                        return "Desconocido";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Fecha límite para la tarea ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `La fecha límite para la tarea **${id}** vence el ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Tarea ${id} eliminada.`;
                },
                description(id: string): string {
                    return `La tarea ${id} fue eliminada de la papelera.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Tarea ${id} repetida.`;
                },
                description(id: string): string {
                    return `La tarea ${id} se repitió y el estado se estableció en todo.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Tarea ${id} creada.`;
                },
                description(task_text: string, id: string): string {
                    return `La tarea ${id} se creó con el texto: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Tarea ${id} actualizada.`;
                },
                description(id: string): string {
                    return `La tarea ${id} se actualizó y se cambió los siguientes datos.`;
                }
            },
            project_created: {
                title: "Proyecto creado",
                description(projectName: string): string {
                    return `Proyecto ${projectName} fue creado`;
                }
            },
            project_deleted: {
                title: "Proyecto eliminado",
                description(projectName: string): string {
                    return `Proyecto ${projectName} fue eliminado`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Estado de la tarea ${id} cambiado`;
                }
            },
            permission_revoked: {
                title: "Permiso revocado",
            },
            permission_granted: {
                title: "Permiso otorgado",
            },
            preset_applied: {
                title: "Preestablecido aplicado",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `La fecha límite para la tarea ${id} está vencida`;
                }
            },
            project_updated: {
                title: "Proyecto actualizado",
                description(name: string): string {
                    return `Proyecto ${name} fue actualizado`;
                }
            },
            test_message: {
                title: "Este es un mensaje de prueba",
                description: "Si ves este mensaje, el webhook funciona correctamente y el registro está habilitado."
            },
            comment_added: {
                title(id: string): string {
                    return `Comentario añadido a la tarea ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Comentario eliminado de la tarea ${id}`;
                }
            },
            topic_created: {
                title: "Tema creado",
                description(name: string): string {
                    return `Tema ${name} fue creado`;
                }
            },
            topic_updated: {
                title: "Tema actualizado",
                description(name: string): string {
                    return `Tema ${name} fue actualizado`;
                }
            },
            topic_deleted: {
                title: "Tema eliminado",
                description(name: string): string {
                    return `Tema ${name} fue eliminado`;
                }
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `El próximo evento (${id}: ${name}) comienza en ${durationTillEventMinutes} minutos en [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string): string {
                    return `Has sido invitado por <@${inviterId}> al evento **${eventName}** que comienza el ${start} y termina el ${end}`;
                },
                accept_button: "Aceptar",
                deny_button: "Rechazar"
            }
        }
    }
}