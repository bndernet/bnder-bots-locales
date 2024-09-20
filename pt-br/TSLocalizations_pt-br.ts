import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_pt_br {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `O prazo para a tarefa **${id}** ${taskTitle} vence em ${deadline} no servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Você foi atribuído à tarefa **${id}** ${taskText} no servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_embed_title(id: string): string {
                return `Tarefa ${id} atribuída`;
            },
            assigned_embed_footer: "Essas notificações podem ser desativadas por um administrador do servidor usando o comando \"/preferences direct_messages\"",
            assigned_embed_button_in_progress: "Marcar como em progresso",
            assigned_embed_button_done: "Marcar como feito",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `O prazo para a tarefa ${id} está atrasado no servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `A tarefa **${id}** ${taskTitle} para a qual você foi designado foi repetida e precisa ser feita novamente no servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Tarefa ${id} repetida`;
            },
            deadline_alert: "Prazo da tarefa",
            commented_embed_title(id: string): string {
                return `Comentário adicionado à tarefa ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Um comentário foi adicionado a uma tarefa no servidor [${guildName}](https://discord.com/channels/${guildId}) por ${author}: ${commentText}`;
            },
            comment_response_button: "Responder ao comentário",
            stop_followup_reminder_button: "Parar lembrete de acompanhamento",
            extend_deadline_by_one_day_button: "Prorrogar o prazo em 1 dia",
            extend_deadline_by_two_days_button: "Prorrogar o prazo em 2 dias",
            extend_deadline_by_one_week_button: "Prorrogar o prazo em 1 semana",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `A tarefa **${id}** ${taskTitle} que você está acompanhando no servidor [${guildName}](https://discord.com/channels/${guildId}) foi alterada:`;
            },
            watcher_notification_footer: "Desative as notificações para essa tarefa usando o comando “/task unwatch”",
            watcher_embed_title(id: string): string {
                return `Tarefa ${id} atualizada`;
            }
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Prazo",
            assignees_field: "Atribuídos",
            status_field: "Estado",
            subtasks_field: "Subtarefas",
            delete_at_field: "Excluir em",
            text_field: "Texto",
            project_field: "Projeto",
            topic_field: "Tópico",
            role_field: "Função",
            permission_field: "Permissão",
            user_field: "Usuário",
            preset_field: "Predefinição",
            priority_field: "Prioridade",
            label_field: "Rótulo",
            personal_field: "Pessoal",
            manager_field: "Gerente",
            repeat_interval_field: "Intervalo de repetição em dias",
            repeat_end_date_field: "Data de término da repetição",
            milestone_field: "Marco",
            due_date_field: "Data de vencimento",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "Em progresso";
                    case 2:
                        return "Feito";
                    default:
                        return "Desconhecido";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Prazo para a tarefa ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `O prazo para a tarefa **${id}** vence em ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Tarefa ${id} excluída.`;
                },
                description(id: string): string {
                    return `A tarefa ${id} foi excluída da lixeira.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Tarefa ${id} repetida.`;
                },
                description(id: string): string {
                    return `A tarefa ${id} foi repetida e o estado foi definido como todo.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Tarefa ${id} criada.`;
                },
                description(task_text: string, id: string): string {
                    return `A tarefa ${id} foi criada com o texto: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Tarefa ${id} atualizada.`;
                },
                description(id: string): string {
                    return `A tarefa ${id} foi atualizada e os seguintes dados foram alterados.`;
                }
            },
            project_created: {
                title: "Projeto criado",
                description(projectName: string): string {
                    return `Projeto ${projectName} foi criado`;
                }
            },
            project_deleted: {
                title: "Projeto excluído",
                description(projectName: string): string {
                    return `Projeto ${projectName} foi excluído`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Status da tarefa ${id} alterado`;
                }
            },
            permission_granted: {
                title: "Permissão concedida",
            },
            permission_revoked: {
                title: "Permissão revogada",
            },
            preset_applied: {
                title: "Preset aplicado",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `O prazo para a tarefa ${id} está atrasado`;
                }
            },
            project_updated: {
                title: "Projeto atualizado",
                description(name: string): string {
                    return `Projeto ${name} foi atualizado`;
                }
            },
            test_message: {
                title: "Esta é uma mensagem de teste",
                description: "Se você vê esta mensagem, o webhook está funcionando corretamente e o log está ativado."
            },
            comment_added: {
                title(id: string): string {
                    return `Comentário adicionado à tarefa ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Comentário excluído da tarefa ${id}`;
                }
            },
            topic_created: {
                title: "Tópico criado",
                description(topicName: string): string {
                    return `Tópico ${topicName} foi criado`;
                }
            },
            topic_updated: {
                title: "Tópico atualizado",
                description(topicName: string): string {
                    return `Tópico ${topicName} foi atualizado`;
                }
            },
            topic_deleted: {
                title: "Tópico excluído",
                description(topicName: string): string {
                    return `Tópico ${topicName} foi excluído`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Documento ${id} criado`;
                },
                description(name: string): string {
                    return `Documento ${name} foi criado`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Documento ${id} atualizado`;
                },
                description(name: string): string {
                    return `Documento ${name} foi atualizado`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Documento ${id} excluído`;
                },
                description(name: string): string {
                    return `Documento ${name} foi excluído`;
                }
            },
            label_created: {
                title: "Rótulo criado",
                description(name: string): string {
                    return `Rótulo ${name} foi criado`;
                }
            },
            label_updated: {
                title: "Rótulo atualizado",
                description(name: string): string {
                    return `Rótulo ${name} foi atualizado`;
                }
            },
            label_deleted: {
                title: "Rótulo excluído",
                description(name: string): string {
                    return `Rótulo ${name} foi excluído`;
                }
            },
            attachments_field: "Anexos",
            milestone_created: {
                title: "Marco criado",
            },
            milestone_updated: {
                title: "Marco atualizado",
            },
            milestone_deleted: {
                title: "Marco excluído",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `O próximo evento (${id}: ${name}) começará em ${durationTillEventMinutes} minutos em [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string): string {
                    return `Você foi convidado para o evento ${eventName} por <@${inviterId}>. O evento ocorrerá de ${start} a ${end}`;
                },
                accept_button: "Aceitar",
                deny_button: "Recusar"
            }
        },
        premium_granted_notification(guildId: string, guildName: string): string {
            return `Parabéns!!! Você foi colocado em um assento premium no servidor [${guildName}](<https://discord.com/channels/${guildId}>). Isso significa que agora você tem acesso a [recursos premium](<https://bnder.net/pricing>). Aproveite!`;
        }
    }
}