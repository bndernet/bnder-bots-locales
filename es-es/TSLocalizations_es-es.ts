import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_es_es {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `La fecha límite para la tarea **${id}** ${taskTitle} vence el ${deadline} en el servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Has sido asignado a la tarea **${id}** ${taskText} en el servidor [${guildName}](https://discord.com/channels/${guildId})`;
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
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `La tarea **${id}** ${taskTitle} a la que está asignado se ha repetido y debe realizarse de nuevo en el servidor [${guildName}](https://discord.com/channels/${guildId})`;
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
            watcher_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `Te han añadido como observador a la tarea **${id}** ${taskText} en el servidor [${guildName}](https://discord.com/channels/${guildId}) por <@${addedBy}>. Recibirás notificaciones cuando se produzca algún cambio en esta tarea. Si quieres dejar de recibir notificaciones, puedes hacer clic en el botón de abajo.`;
            },
            watcher_added_notification_unsubscribe_button: "Darse de baja",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `La tarea **${id}** ${taskTitle} que estás viendo en el servidor [${guildName}](https://discord.com/channels/${guildId}) ha cambiado:`;
            },
            watcher_notification_footer: "Desactive las notificaciones de esta tarea mediante el comando «/task unwatch».",
            watcher_embed_title(id: string): string {
                return `Tarea ${id} actualizada`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `El hito **${milestoneName}** vence en menos de 6 horas en el servidor [${guildName}](https://discord.com/channels/${guildId}) y tiene tareas que deben completarse.`;
            },
            status_todo: "Todo",
            status_in_progress: "En progreso",
            status_done: "Hecho",
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Fecha límite",
            assignees_field: "Asignados",
            status_field: "Estado",
            todos_field: "Qué hacer",
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
            milestone_field: "Hito",
            due_date_field: "Fecha de vencimiento",
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
            document_created: {
                title(id: string): string {
                    return `Documento ${id} creado`;
                },
                description(id: string): string {
                    return `Documento ${id} fue creado`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Documento ${id} actualizado`;
                },
                description(id: string): string {
                    return `Documento ${id} fue actualizado`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Documento ${id} eliminado`;
                },
                description(id: string): string {
                    return `Documento ${id} fue eliminado`;
                }
            },
            label_created: {
                title: "Etiqueta creada",
                description(name: string): string {
                    return `Etiqueta ${name} fue creada`;
                }
            },
            label_updated: {
                title: "Etiqueta actualizada",
                description(name: string): string {
                    return `Etiqueta ${name} fue actualizada`;
                }
            },
            label_deleted: {
                title: "Etiqueta eliminada",
                description(name: string): string {
                    return `Etiqueta ${name} fue eliminada`;
                }
            },
            attachments_field: "Archivos adjuntos",
            milestone_created: {
                title: "Hito creado",
            },
            milestone_updated: {
                title: "Hito actualizado",
            },
            milestone_deleted: {
                title: "Hito eliminado",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `El próximo evento (${id}) **${name}** comenzará en ${durationTillEventMinutes} minutos a las ${startTime} en [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `Ha sido invitado al evento ${eventId} por <@${inviterId}>: **${eventName}** que comienza en ${start} y termina en ${end}.\n-# Todas las fechas se calculan en ${timezone}. Use \"/settings timezone\" para cambiar la zona horaria de todo el servidor o \"/preferences timezone\" para cambiar la suya.`;
                },
                accept_button: "Aceptar",
                deny_button: "Rechazar"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> actualizó el evento ${eventId}: **${eventName}** comenzando en ${start} y terminando en ${end}.\n-# Todas las fechas se calculan en ${timezone}. Use \"/settings timezone\" para cambiar la zona horaria de todo el servidor o \"/preferences timezone\" para cambiar la suya.`;
                }
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `¡Felicitaciones! Has conseguido un puesto pro en el servidor [${guildName}](<https://discord.com/channels/${guildId}>). Esto significa que ahora tienes acceso a las [funciones pro](<https://bnder.net/pricing>). ¡Que lo disfrutes!`;
        },
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 Acción necesaria: Error en el pago de la suscripción Pro\nNo pudimos procesar el pago de una o más suscripciones Pro en [${guildName}](<https://discord.com/channels/${guildId}>). Para evitar perder el acceso a las funciones Pro, [actualiza tu información de pago y paga tu factura ahora](<${customerPortalLink}>).\n\nTus funciones Pro se desactivarán pronto si no realizas ninguna acción.\n\n¿Necesitas ayuda? [Contacta con soporte técnico](https://bnder.net/discord). Estamos aquí para ayudarte.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `El archivo **${fileName}** ha sido compartido contigo en el servidor [${guildName}](https://discord.com/channels/${guildId}) por <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `La carpeta **${folderName}** ha sido compartida contigo en el servidor [${guildName}](https://discord.com/channels/${guildId}) por <@${userId}>`;
            }
        },
        self_data_download_ready: "Sus datos están listos para descargarse. Puede descargarlos en [nuestra aplicación](<https://bnder.net/app/>). El enlace de descarga estará disponible durante dos semanas.",
        tutorial_tasks: {
            tutorial_label_name: "Tutorial",
            create_first_task_title: "Crea tu primera tarea",
            create_first_task_description: "Comienza creando una tarea. Asígnale un nombre y opcionalmente una descripción.",
            change_task_status_title: "Cambiar estado de la tarea",
            change_task_status_description: "Cambia el estado de una tarea a 'En progreso' o 'Hecho' arrastrándola a la columna correspondiente.",
            invite_team_members_title: "Invita a los miembros de tu equipo",
            invite_team_members_description: "Invita a los miembros de tu equipo a unirse a tu espacio de trabajo. Verán la invitación en la configuración de usuario.",
            explore_workspace_title: "Explora el espacio de trabajo",
            explore_workspace_description: "Explora el espacio de trabajo y familiarízate con las funciones. Puedes crear tareas, administrar miembros y más. También puedes revisar la configuración para ajustar el formato de fecha, idioma y zona horaria."
        }
    }
}